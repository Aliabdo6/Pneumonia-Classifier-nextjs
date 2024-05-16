"use client";

import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";

export default function PneumoniaClassifier() {
  const [model, setModel] = useState(null);
  const [status, setStatus] = useState("");
  const [predictionResult, setPredictionResult] =
    useState(null);

  async function loadModel() {
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
  }

  async function predict() {
    if (!model) {
      alert("Model not loaded yet!");
      return;
    }

    const imageUpload = document.getElementById(
      "imageUpload"
    );
    const imageContainer =
      document.getElementById("imageContainer");

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
      img.onload = function () {
        const tensor = preprocessImage(img);
        makePrediction(tensor);
      };
      img.src = e.target.result;
      imageContainer.innerHTML = "";
      imageContainer.appendChild(img);
    };

    reader.readAsDataURL(file);
  }

  function preprocessImage(img) {
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
  }

  async function makePrediction(tensor) {
    setStatus("Making prediction...");
    try {
      const prediction = await model
        .predict(tensor)
        .data();
      setPredictionResult(prediction);
      setStatus("Prediction complete");
    } catch (error) {
      setStatus(
        `Error making prediction: ${error.message}`
      );
    }
  }

  return (
    <>
      <div className="w-full">
        <div className="maindiv flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">
            Pneumonia Classifier
          </h1>
          <p className="text-lg text-center mb-4">
            Upload a chest X-ray image using the
            input field below. Click "Load Model"
            to load the deep learning model for
            pneumonia classification. Once the
            model is loaded, click "Predict" to
            predict whether the X-ray image shows
            signs of pneumonia or not.
          </p>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="mb-4"
          />
          <button
            onClick={loadModel}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Load Model
          </button>
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
            id="imageContainer"
            className="mb-4"
            style={{
              maxWidth: "500px",
              maxHeight: "500px",
            }} // Set max width and height for the image container
          ></div>
          <div
            id="predictionResult"
            className="text-lg"
          >
            {predictionResult && (
              <>
                <h2>Prediction:</h2>
                <p>
                  Normal: {predictionResult[0]}
                </p>
                <p>
                  Pneumonia: {predictionResult[1]}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* <div className="maindiv flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Pneumonia Classifier
        </h1>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          className="mb-4"
        />
        <button
          onClick={loadModel}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Load Model
        </button>
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
          id="imageContainer"
          className="mb-4"
        ></div>
        <div
          id="predictionResult"
          className="text-lg"
        >
          {predictionResult && (
            <>
              <h2>Prediction:</h2>
              <p>Normal: {predictionResult[0]}</p>
              <p>
                Pneumonia: {predictionResult[1]}
              </p>
            </>
          )}
        </div>
      </div> */}
    </>
  );
}
