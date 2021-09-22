import { ActionType } from "./types";
import { Dispatch } from "redux";
import { Action } from ".";

export const updateDates = (dates: object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE,
      payload: dates,
    });
  };
};

export const clearDates = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLEAR,
    });
  };
};
