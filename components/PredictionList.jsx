"use client";

import React, {
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";

const PredictionList = () => {
  const [predictions, setPredictions] = useState(
    []
  );
  const [isLoading, setIsLoading] =
    useState(true);
  const [error, setError] = useState(null);

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
        setError(
          "Failed to load predictions. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchPredictions();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  if (!predictions || predictions.length === 0) {
    return (
      <div className="text-center text-gray-600 font-semibold">
        No predictions available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {predictions.map((prediction, index) => (
        <motion.div
          key={prediction._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
          }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">
              Prediction #
              {predictions.length - index}
            </div>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-semibold">
                User:
              </span>{" "}
              {prediction.userName}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-semibold">
                Result:
              </span>{" "}
              <span
                className={`font-bold ${
                  prediction.prediction ===
                  "NORMAL"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {prediction.prediction}
              </span>
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">
                Date:
              </span>{" "}
              {new Date(
                prediction.timestamp
              ).toLocaleString()}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PredictionList;

// "use client";

// import React, {
//   useEffect,
//   useState,
// } from "react";

// import { motion } from "framer-motion";

// const PredictionList = () => {
//   const [predictions, setPredictions] = useState(
//     []
//   );
//   const [isLoading, setIsLoading] =
//     useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPredictions = async () => {
//       try {
//         const response = await fetch(
//           "/api/getResults"
//         );
//         if (!response.ok) {
//           throw new Error(
//             "Failed to fetch prediction results"
//           );
//         }
//         const data = await response.json();
//         setPredictions(data);
//       } catch (error) {
//         console.error(
//           "Error fetching prediction results:",
//           error
//         );
//         setError(
//           "Failed to load predictions. Please try again later."
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPredictions();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-600 font-semibold">
//         {error}
//       </div>
//     );
//   }

//   if (!predictions || predictions.length === 0) {
//     return (
//       <div className="text-center text-gray-600 font-semibold">
//         No predictions available.
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {predictions.map((prediction, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.3,
//             delay: index * 0.1,
//           }}
//           className="bg-white rounded-lg shadow-lg overflow-hidden"
//         >
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2 text-gray-800">
//               Prediction #
//               {predictions.length - index}
//             </div>
//             <p className="text-gray-700 text-base mb-2">
//               <span className="font-semibold">
//                 User:
//               </span>{" "}
//               {prediction.userName}
//             </p>
//             <p className="text-gray-700 text-base mb-2">
//               <span className="font-semibold">
//                 Result:
//               </span>{" "}
//               <span
//                 className={`font-bold ${
//                   prediction.prediction ===
//                   "NORMAL"
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }`}
//               >
//                 {prediction.prediction}
//               </span>
//             </p>
//             <p className="text-gray-600 text-sm">
//               <span className="font-semibold">
//                 Date:
//               </span>{" "}
//               {new Date(
//                 prediction.timestamp
//               ).toLocaleString()}
//             </p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default PredictionList;
