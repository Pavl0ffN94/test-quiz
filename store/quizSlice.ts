import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {quiz} from '../app/data';

export interface QuizState {
  activeQuestion: number;
  selectedAnswer: string;
  checked: boolean;
  selectedAnswerIndex: null;
  showResult: boolean;
  result: {
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
  };
}

const initialState: QuizState = {
  activeQuestion: 0,
  selectedAnswer: '',
  checked: false,
  selectedAnswerIndex: null,
  showResult: false,
  result: {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  },
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setActiveQuestion(state, action) {
      state.activeQuestion = action.payload;
    },
    setSelectedAnswer(state, action) {
      state.selectedAnswer = action.payload;
    },
    setChecked(state, action) {
      state.checked = action.payload;
    },
    setSelectedAnswerIndex(state, action) {
      state.selectedAnswerIndex = action.payload;
    },
    setShowResult(state, action) {
      state.showResult = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
  },
});

export const {
  setActiveQuestion,
  setSelectedAnswer,
  setChecked,
  setSelectedAnswerIndex,
  setShowResult,
  setResult,
} = quizSlice.actions;

export default quizSlice.reducer;
