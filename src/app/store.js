import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "../features/Quiz/QuizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
