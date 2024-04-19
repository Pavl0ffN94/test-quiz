import React from 'react';
interface AnswerProps {
  answer: string[];
  onAnswerSelected: (answer: string[], idx: number) => void;
}

export default function Answer({answer, onAnswerSelected}: AnswerProps) {
  if (answer.length !== 0) {
    return (
      <div>
        {answers.map((answer, idx) => (
          <li key={idx} onClick={() => onAnswerSelected(answer, idx)}>
            <span>{answer}</span>
          </li>
        ))}
      </div>
    );
  }
  return (
    <div>
      <input></input>
    </div>
  );
}
