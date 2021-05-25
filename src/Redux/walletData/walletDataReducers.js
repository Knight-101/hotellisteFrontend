import { UPDATE_DATA } from "./walletDataTypes";

const initialState = { wallet: null };

const walletDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        wallet: action.payload,
      };

    default:
      return state;
  }
};

export default walletDataReducer;
