import { SET_DATA } from "./bookingDataTypes";

const initialState = { bookingHistory: [] };

const bookingDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        bookingHistory: [...state.bookingHistory, action.payload],
      };

    default:
      return state;
  }
};

export default bookingDataReducer;
