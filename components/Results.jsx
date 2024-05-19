"use client";
import { useState, useEffect } from "react";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await fetch("/api/getResults");
      const data = await res.json();
      setResults(data);
    };

    fetchResults();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Prediction Results
      </h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Timestamp</th>
            <th className="py-2">Prediction</th>
            <th className="py-2">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">
                {new Date(
                  result.timestamp
                ).toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                {result.prediction.join(", ")}
              </td>
              <td className="border px-4 py-2">
                {result.prediction
                  .map((p) =>
                    (p * 100).toFixed(2)
                  )
                  .join(", ")}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;

// import { useState, useEffect } from "react";

// const Results = () => {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       const res = await fetch("/api/getResults");
//       const data = await res.json();
//       setResults(data);
//     };

//     fetchResults();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">
//         Prediction Results
//       </h1>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-2">Timestamp</th>
//             <th className="py-2">Prediction</th>
//             <th className="py-2">Confidence</th>
//           </tr>
//         </thead>
//         <tbody>
//           {results.map((result, index) => (
//             <tr key={index}>
//               <td className="border px-4 py-2">
//                 {new Date(
//                   result.timestamp
//                 ).toLocaleString()}
//               </td>
//               <td className="border px-4 py-2">
//                 {result.prediction}
//               </td>
//               <td className="border px-4 py-2">
//                 {(
//                   result.confidence * 100
//                 ).toFixed(2)}
//                 %
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Results;
