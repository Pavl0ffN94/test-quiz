'use client';
import Steppers from '@/components/Stepper';
import {quiz} from '../data';
import {useSteps} from '@chakra-ui/react';
import {Quest, answerQuestion, resetQuiz, useAppDispatch, useAppSelector} from '@/store';
import {useCallback, useState} from 'react';
import Card from '@/components/Card';

export default function Page() {
  const dispatch = useAppDispatch();
  const questions = useAppSelector(state => state.quiz.questions);
  const currentQuestionIndex = useAppSelector(state => state.quiz.currentQuestionIndex);
  const score = useAppSelector(state => state.quiz.score);
  const currentQuestion = questions[currentQuestionIndex];

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswer = () => {
    if (selectedAnswer !== '') {
      dispatch(answerQuestion({questionId: currentQuestion.id + 1, selectedAnswer}));
      setSelectedAnswer('');
    } else {
      alert('Пожалуйста, выберите ответ ');
    }
  };

  const handleChange = event => {
    const givenAnswer = event.target.value.toLowerCase().replace(/\s+/g, '');
    setSelectedAnswer(givenAnswer);
  };

  const restartQuizHandler = useCallback(() => {
    dispatch(resetQuiz());
  }, [dispatch]);

  return (
    <div className='container'>
      <h1>Тестирование</h1>
      <div>
        {currentQuestion && (
          <div>
            <h2>{currentQuestion.text}</h2>
            <div>
              {currentQuestion.answers.map((option, index) => (
                <form
                  value={option}
                  onChange={handleChange}
                  className='quiz-container'
                  key={index}>
                  <input
                    checked={selectedAnswer === index}
                    className='li'
                    type='radio'
                    id={index}
                    name='answer'
                  />
                  <label htmlFor={option}>{option}</label>
                </form>
              ))}
            </div>
            <button onClick={handleAnswer}>Ответить</button>
          </div>
        )}
        {currentQuestionIndex === questions.length && (
          <div>
            <h2>Результаты теста</h2>
            <p>Правильных ответов: {score}</p>
            <button onClick={restartQuizHandler}>Начать заново</button>
          </div>
        )}
      </div>
    </div>
  );
}
