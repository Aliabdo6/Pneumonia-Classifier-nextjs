import React from "react";
import PredictionList from "../../../components/PredictionList";

const PredictionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Prediction Results
        </h1>
        <PredictionList />
      </div>
    </div>
  );
};

export default PredictionsPage;
