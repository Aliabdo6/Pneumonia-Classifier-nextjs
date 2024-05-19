import React from "react";

const PredictionResult = ({
  predictionResult,
  userRole,
}) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-semibold mb-2">
        Prediction Result:
      </h2>
      <p>Result: {predictionResult}</p>
      {userRole === "clerk" && (
        <div className="mt-2">
          <h3 className="text-lg font-semibold">
            Additional Information for Clerk:
          </h3>
          <p>
            This is specific information visible
            only to the clerk.
          </p>
        </div>
      )}
    </div>
  );
};

export default PredictionResult;
