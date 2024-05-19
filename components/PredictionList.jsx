"use client";

import React, {
  useEffect,
  useState,
} from "react";

const PredictionList = () => {
  const [predictions, setPredictions] = useState(
    []
  );

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const response = await fetch(
          "/api/getResults"
        );
        if (!response.ok) {
          throw new Error(
            "Failed to fetch prediction results"
          );
        }
        const data = await response.json();
        setPredictions(data);
      } catch (error) {
        console.error(
          "Error fetching prediction results:",
          error
        );
      }
    };

    fetchPredictions();
  }, []);

  if (!predictions || predictions.length === 0) {
    return <div>No predictions available.</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Prediction Results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {predictions.map((prediction, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-md"
          >
            <p className="font-bold">
              Prediction #{index + 1}
            </p>
            <p>
              <strong>User:</strong>{" "}
              {prediction.userName}
            </p>
            <p>
              <strong>Prediction:</strong>{" "}
              {prediction.prediction}
            </p>
            <p>
              <strong>Timestamp:</strong>{" "}
              {new Date(
                prediction.timestamp
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictionList;
