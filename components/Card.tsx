import {Quest} from '@/app/data';
import {QuizState, useSelectorWithStore} from '@/store';
import React from 'react';
// interface Iprops {
//   activeQuestion: boolean;
//   questions: Quest[];
//   showResult: boolean;
//   answers: string[];
//   onAnswerSelected: (answer: string[], idx: number) => void;
//   nextQuestion: () => void;
//   result: {
//     score: number;
//     correctAnswers: number;
//     wrongAnswers: number;
//   };
//   question: string;
//   checked: boolean;
// }

export default function Card({questions}) {
  const {
    activeQuestion,
    checked,
    result,
    selectedAnswer,
    selectedAnswerIndex,
    showResult,
  }: QuizState = useSelectorWithStore(state => state.quiz);
  return (
    <div className='container'>
      <div>
        <h2>
          Вопрос: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className='quiz-container'>
            <h3>{question}</h3>
            {answers.map((answer, idx) => (
              <li key={idx} onClick={() => onAnswerSelected(answer, idx)}>
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={() => nextQuestion} className='btn'>
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className='btn-disabled'>
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className='quiz-container'>
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}
