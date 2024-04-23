import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {quiz} from '../app/data';

export interface Quest {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string | number;
  customAnswer?: boolean;
}

export interface QuizState {
  questions: Quest[];
  currentQuestionIndex: number;
  score: number;
}

const initialState: QuizState = {
  questions: [
    {
      id: 1,
      question: 'Какой язык работает в браузере?',
      answers: ['Java', 'C', 'Python', 'JavaScript'],
      correctAnswer: 'javascript',
    },
    {
      id: 2,
      question: 'Что означает CSS?',
      answers: [
        'Central Style Sheets',
        'Cascading Style Sheets',
        'Cascading Simple Sheets',
        'Cars SUVs Sailboats',
      ],
      correctAnswer: 'cascadingstylesheets',
    },
    {
      id: 3,
      question: 'Что означает HTML?',
      answers: [
        'Hypertext Markup Language',
        'Hypertext Markdown Language',
        'Hyperloop Machine Language',
        'Helicopters Terminals Motorboats Lamborginis',
      ],
      correctAnswer: 'hypertextmarkuplanguage',
    },
    // {
    //   id: 4,
    //   question: 'Какой язык работает в браузере?',
    //   answers: [],
    //   correctAnswer: 'javascript',
    //   customAnswer: true,
    // },
    {
      id: 5,
      question: 'Что означает HTML?',
      answers: [
        'Hypertext Markup Language',
        'Hypertext Markdown Language',
        'Hyperloop Machine Language',
        'Helicopters Terminals Motorboats Lamborginis',
      ],
      correctAnswer: 'hypertextmarkuplanguage',
    },
    {
      id: 6,
      question: 'В каком году был создан JavaScript?',
      answers: ['1996', '1995', '1994', 'все ответы неверные'],
      correctAnswer: '1995',
    },
  ],
  currentQuestionIndex: 0,
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const {questionId, selectedAnswer} = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      const isAnswerCorrect = question.correctAnswer === selectedAnswer;
      state.score += isAnswerCorrect ? 1 : 0;
      state.currentQuestionIndex += 1;
    },
    resetQuiz: state => {
      state.currentQuestionIndex = 0;
      state.score = 0;
    },
  },
});

export const {answerQuestion, resetQuiz} = quizSlice.actions;
export default quizSlice.reducer;
