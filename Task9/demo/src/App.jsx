import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import "./App.css";

const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Tool Markup Language",
      "HighText Machine Language",
      "None of these"
    ],
    correctAnswer: "Hypertext Markup Language",
  }
];

const App = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < quizData.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      <h1>🌟 Quiz App 🌟</h1>
      {showResult ? (
        <Result score={score} total={quizData.length} onRestart={handleRestart} />
      ) : (
        <Question
          data={quizData[current]}
          questionNumber={current + 1}
          totalQuestions={quizData.length}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;
