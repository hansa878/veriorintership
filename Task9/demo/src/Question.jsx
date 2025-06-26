import React, { useState } from "react";

const Question = ({ data, onAnswer, questionNumber, totalQuestions }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    setSelected(option);
    setTimeout(() => {
      onAnswer(option === data.correctAnswer);
      setSelected(null);
    }, 1000);
  };

  return (
    <div className="question-box">
      <h2>
        Question {questionNumber} of {totalQuestions}
      </h2>
      <p className="question-text">{data.question}</p>
      <div className="options">
        {data.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              selected
                ? option === data.correctAnswer
                  ? "correct"
                  : option === selected
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => handleClick(option)}
            disabled={selected !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
