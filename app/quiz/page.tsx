'use client';
import Steppers from '@/components/Stepper';
import {quiz} from '../data';
import {useSteps} from '@chakra-ui/react';
import {
  QuizState,
  setSelectedAnswer,
  setSelectedAnswerIndex,
  useAppDispatch,
  setActiveQuestion,
  setChecked,
  useAppSelector,
  useSelectorWithStore,
  setShowResult,
} from '@/store';
import {useCallback, useEffect} from 'react';
import Card from '@/components/Card';

export default function Page() {
  const {
    activeQuestion,
    checked,
    result,
    selectedAnswer,
    selectedAnswerIndex,
    showResult,
  }: QuizState = useSelectorWithStore(state => state.quiz);
  const dispatch = useAppDispatch();

  const {questions} = quiz;
  const {id, question, answers, correctAnswer} = questions[activeQuestion];

  const {activeStep} = useSteps({
    index: 0,
    count: questions.length,
  });
  const activeStepText = questions[activeStep].id;
  const max = questions.length + 1;
  const progressPercent = (activeStep / max) * 100;

  const onAnswerSelected = useCallback(
    (answer: string, idx: number) => {
      const processedAnswer = answer.toLocaleLowerCase().trim();
      dispatch(setChecked(true));
      dispatch(setSelectedAnswerIndex(idx));
      if (processedAnswer === correctAnswer) {
        dispatch(setSelectedAnswerIndex(true));
        console.log('true');
      } else {
        dispatch(setSelectedAnswerIndex(false));
        console.log(answer);

        console.log('false');
      }
    },
    [correctAnswer, dispatch],
  );

  const nextQuestion = useCallback(() => {
    dispatch(setSelectedAnswerIndex(null));
    dispatch(
      setResult(prevResult =>
        selectedAnswer
          ? {
              ...prevResult,
              score: prevResult.score + 5,
              correctAnswers: prevResult.correctAnswers + 1,
            }
          : {
              ...prevResult,
              wrongAnswers: prevResult.wrongAnswers + 1,
            },
      ),
    );

    if (activeQuestion !== questions.length - 1) {
      dispatch(setActiveQuestion(activeQuestion + 1));
    } else {
      dispatch(setActiveQuestion(0));
      dispatch(setShowResult(true));
    }

    dispatch(setChecked(false));
  }, [activeQuestion, dispatch, questions.length, selectedAnswer]);

  return (
    <div className='container'>
      <h1>Тестирование</h1>
      <Steppers
        activeStep={activeStep}
        quiz={questions}
        progressPercent={progressPercent}
      />
      <Card
        activeQuestion={activeQuestion}
        questions={questions}
        showResult={showResult}
        answers={answers}
        onAnswerSelected={onAnswerSelected}
        nextQuestion={nextQuestion}
        result={result}
        question={question}
        checked={checked}
      />
    </div>
  );
}
