import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quizEndpoint } from "../Common/endpoints";
import { ERRORS } from "../Common/stringConfig";

export const fetchQuiz = createAsyncThunk(
  "quiz/fetch",
  async (params, { dispatch }) => {
    try {
      const response = await fetch(
        quizEndpoint(params.amount, params.difficulty, params.type)
      );
      const parsedResponse = await response.json();
      if (parsedResponse.response_code === 0) {
        dispatch(updateQuiz(parsedResponse));
        return parsedResponse;
      } else {
        throw new Error(ERRORS.QUESTIONS_FETCH);
      }
    } catch (err) {
      alert(err);
    }
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState: { questions: [], answers: [] },
  reducers: {
    updateQuiz: (state, action) => {
      if (action.payload.results) {
        state.questions = action.payload.results;
      }
    },
    addAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    clearQuiz: (state, action) => {
      return { questions: [], answers: [] };
    },
  },
});

export const { updateQuiz, addAnswer, clearQuiz } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
