"use client";

import React, {
  useState,
  useEffect,
} from "react";
import * as tf from "@tensorflow/tfjs";
import { useClerk } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const PneumoniaClassifier = () => {
  const [model, setModel] = useState(null);
  const [status, setStatus] = useState("");
  const [predictionResult, setPredictionResult] =
    useState(null);
  const [isLoading, setIsLoading] =
    useState(false);
  const [imagePreview, setImagePreview] =
    useState(null);
  const { user } = useClerk();

  useEffect(() => {
    const loadModel = async () => {
      setStatus("Loading model...");
      try {
        const loadedModel =
          await tf.loadLayersModel(
            "/model/model.json"
          );
        setModel(loadedModel);
        setStatus("Model Loaded");
      } catch (error) {
        setStatus(
          `Error loading model: ${error.message}`
        );
      }
    };

    loadModel();
  }, []);

  const predict = async () => {
    if (!model) {
      alert("Model not loaded yet!");
      return;
    }

    const imageUpload = document.getElementById(
      "imageUpload"
    );
    const file = imageUpload.files[0];
    if (!file) {
      alert("Please select an image.");
      return;
    }

    setIsLoading(true);
    const reader = new FileReader();
    reader.onloadstart = function () {
      setStatus("Image loading...");
    };

    reader.onload = async function (e) {
      const img = new Image();
      img.onload = async function () {
        const tensor = preprocessImage(img);
        makePrediction(tensor);
      };
      img.src = e.target.result;
      setImagePreview(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const preprocessImage = (img) => {
    const canvas =
      document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 224;
    canvas.height = 224;
    ctx.drawImage(img, 0, 0, 224, 224);
    const imageData = ctx.getImageData(
      0,
      0,
      224,
      224
    );
    const data = imageData.data;

    const grayData = new Uint8Array(224 * 224);
    for (let i = 0; i < data.length; i += 4) {
      const avg =
        (data[i] + data[i + 1] + data[i + 2]) / 3;
      grayData[i / 4] = avg;
    }

    const tensor = tf.tensor3d(
      grayData,
      [224, 224, 1]
    );
    return tensor.expandDims();
  };

  const makePrediction = async (tensor) => {
    setStatus("Making prediction...");
    try {
      const prediction = await model
        .predict(tensor)
        .data();
      const formattedPrediction =
        formatPrediction(prediction);
      setPredictionResult(formattedPrediction);
      setStatus("Prediction complete");

      savePredictionResult(formattedPrediction);
    } catch (error) {
      setStatus(
        `Error making prediction: ${error.message}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrediction = (prediction) => {
    const [normal, pneumonia] = prediction;
    return normal > pneumonia
      ? "NORMAL"
      : "PNEUMONIA";
  };

  const savePredictionResult = async (
    formattedPrediction
  ) => {
    try {
      const response = await fetch(
        "/api/savePredictionResult",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prediction: formattedPrediction,
            timestamp: new Date().toISOString(),
            user: user?.id,
            userName: user?.fullName,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to save prediction result"
        );
      }

      console.log(
        "Prediction result saved successfully."
      );
    } catch (error) {
      console.error(
        "Error saving prediction result:",
        error
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="p-8"
        >
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Pneumonia Classifier
          </h1>
          <p className="text-lg text-center mb-8 text-gray-600">
            Upload a chest X-ray image to predict
            whether it shows signs of pneumonia.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8"
          >
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                setStatus("Image selected");
                setImagePreview(
                  URL.createObjectURL(
                    e.target.files[0]
                  )
                );
              }}
            />
            <label
              htmlFor="imageUpload"
              className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full block text-center transition duration-300 ease-in-out"
            >
              Choose X-ray Image
            </label>
          </motion.div>

          {imagePreview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <img
                src={imagePreview}
                alt="X-ray Preview"
                className="max-w-full h-auto mx-auto rounded-lg shadow-md"
                style={{ maxHeight: "300px" }}
              />
            </motion.div>
          )}

          <motion.button
            onClick={predict}
            disabled={isLoading || !imagePreview}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full mb-6 transition duration-300 ease-in-out ${
              isLoading || !imagePreview
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block w-6 h-6 border-t-2 border-white rounded-full"
              />
            ) : (
              "Predict"
            )}
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: status ? 1 : 0 }}
            className="text-center text-lg font-semibold mb-6 text-gray-700"
          >
            {status}
          </motion.div>

          {predictionResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Results
              </h2>
              <p className="text-xl font-semibold text-gray-700">
                Prediction:{" "}
                <span
                  className={
                    predictionResult === "NORMAL"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {predictionResult}
                </span>
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PneumoniaClassifier;
