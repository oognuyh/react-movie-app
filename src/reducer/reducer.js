import { ACTIONS } from "../common/action";

export const movieReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true, error: null, movies: null };

    case ACTIONS.SUCCESS:
      return { ...state, loading: false, movies: action.payload, error: null };

    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.error, movies: null };

    default:
      return state;
  }
};

export const modalReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SHOW:
      return { ...state, movie: action.movie, isOpen: true };

    case ACTIONS.HIDE:
      return { ...state, movie: null, isOpen: false };

    default:
      return state;
  }
};
