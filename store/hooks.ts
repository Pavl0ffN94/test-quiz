import {TypedUseSelectorHook, createSelectorHook} from 'react-redux';
import {QuizState} from './quizSlice';

export const useSelectorWithStore: TypedUseSelectorHook<QuizState> = createSelectorHook();
