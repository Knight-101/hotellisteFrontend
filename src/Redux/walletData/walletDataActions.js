import { UPDATE_DATA } from "./walletDataTypes";

export const setWalletData = (data) => {
  return {
    type: UPDATE_DATA,
    payload: data,
  };
};
