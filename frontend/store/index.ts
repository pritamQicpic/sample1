// store/index.ts

import { createStore } from 'redux';

const initialState = {
  user: null,
  resumes: [],
  coverLetters: [],
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_RESUMES':
      return { ...state, resumes: action.payload };
    case 'SET_COVER_LETTERS':
      return { ...state, coverLetters: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
