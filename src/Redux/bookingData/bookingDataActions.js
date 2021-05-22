import { SET_DATA } from "./bookingDataTypes";

export const setBookingData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};
