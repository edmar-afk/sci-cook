import React, { useState } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
const data = [
  { common: "Potato", scientific: "Solanum tuberosum" },
  { common: "Rice", scientific: "Oryza sativa" },
  { common: "Cabbage", scientific: "Brassica oleracea var. capitata" },
  { common: "Apple", scientific: "Malus domestica" },
  { common: "Lettuce", scientific: "Lactuca sativa" },
];

export default function Table() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [remarks, setRemarks] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const handleSubmit = () => {
    let s = 0;
    data.forEach((row) => {
      if (
        answers[row.common]?.trim().toLowerCase() ===
        row.scientific.trim().toLowerCase()
      ) {
        s++;
      }
    });

    setScore(s);
    setShowResults(true);

    if (s === data.length) {
      setRemarks("Excellent! Perfect score!");
      setShowConfetti(true);
    } else if (s >= data.length / 2) {
      setRemarks("Good job! Keep improving!");
      setShowConfetti(true);
    } else {
      setRemarks("Keep trying! You can do it!");
    }
  };

  const handleTryAgain = () => {
    window.location.reload();
  };

  return (
    <div className="w-full mx-auto px-2 h-screen">
      <div className="bg-gradient-to-r from-pink-500 to-rose-400 rounded-2xl shadow-lg">
        <div className="px-6 py-5 sm:px-8 bg-white/10">
          <h2 className="text-white text-2xl font-semibold">Direction</h2>
          <p className="text-white/80 mt-1">
            Give the scientific name of the ingredients.
          </p>
        </div>
        <div className="bg-white p-4 sm:p-6">
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Ingredients
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Scientific name
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {data.map((row, i) => {
                  const userAnswer = answers[row.common];
                  const isCorrect =
                    userAnswer?.trim().toLowerCase() ===
                    row.scientific.toLowerCase();
                  const showError = showResults && !isCorrect;

                  return (
                    <tr
                      key={row.common}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 font-semibold">
                            {row.common.charAt(0)}
                          </div>
                          <div className="text-sm font-semibold text-gray-800">
                            {row.common}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Answer"
                            className={`border rounded-lg px-3 py-2 w-full text-sm ${
                              showError ? "border-red-500" : "border-gray-300"
                            }`}
                            onChange={(e) =>
                              handleChange(row.common, e.target.value)
                            }
                            disabled={score !== null}
                          />
                          {showError && (
                            <p className="text-red-600 text-xs mt-1">
                              Correct answer: {row.scientific}
                            </p>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {score !== null && (
            <div className="mt-4 p-4 rounded-xl bg-rose-100 text-rose-800 text-center">
              <p className="font-bold text-lg">
                Score: {score} / {data.length}
              </p>
              <p className="mt-1">{remarks}</p>
              <div className="flex flex-row items-center justify-center gap-4">
                {" "}
                {score !== data.length && (
                  <button
                    onClick={handleTryAgain}
                    className="cursor-pointer hover:scale-110 duration-300 mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium shadow-sm"
                  >
                    Try Again
                  </button>
                )}
                {/* ⭐ NEXT BUTTON ADDED HERE ⭐ */}
                <div className="mt-4">
                  <Link
                    to="/quiz2"
                    className="cursor-pointer hover:scale-110 duration-300 inline-flex items-center gap-2 rounded-full px-6 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium shadow-sm"
                  >
                    Next →
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium shadow-sm"
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>
      {showConfetti && (
        <div className="fixed top-0 left-0">
          {" "}
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
          />
        </div>
      )}
    </div>
  );
}
