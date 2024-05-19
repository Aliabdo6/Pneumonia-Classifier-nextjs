import React from "react";
import PredictionList from "../../../components/PredictionList";

const PredictionsPage = () => {
  return (
    <div className="w-full">
      <div className="maindiv flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Prediction Results
        </h1>
        <PredictionList />
      </div>
    </div>
  );
};

export default PredictionsPage;
