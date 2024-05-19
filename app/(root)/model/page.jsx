"use client";

import React, {
  useState,
  useEffect,
} from "react";
import * as tf from "@tensorflow/tfjs";
import { useClerk } from "@clerk/clerk-react";

const PneumoniaClassifier = () => {
  const [model, setModel] = useState(null);
  const [status, setStatus] = useState("");
  const [predictionResult, setPredictionResult] =
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

      // Save prediction result
      savePredictionResult(formattedPrediction);
    } catch (error) {
      setStatus(
        `Error making prediction: ${error.message}`
      );
    }
  };

  const formatPrediction = (prediction) => {
    const [normal, pneumonia] = prediction;
    if (normal > pneumonia) {
      return "NORMAL";
    } else {
      return "PNEUMONIA";
    }
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
    <div className="w-full">
      <div className="maindiv flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Pneumonia Classifier
        </h1>
        <p className="text-lg text-center mb-4">
          Upload a chest X-ray image using the
          input field below. Click "Load Model" to
          load the deep learning model for
          pneumonia classification. Once the model
          is loaded, click "Predict" to predict
          whether the X-ray image shows signs of
          pneumonia or not.
        </p>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          className="mb-4"
        />
        <button
          onClick={predict}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Predict
        </button>
        <div id="status" className="mb-4">
          {status}
        </div>
        <div
          id="predictionResult"
          className="text-lg"
        >
          {predictionResult && (
            <>
              <h2>
                The team will call you to discuss
                the results.
              </h2>
              {/* <p>{predictionResult}</p> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PneumoniaClassifier;
