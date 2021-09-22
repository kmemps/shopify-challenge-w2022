import { Action } from "../actions";
import { ActionType } from "../actions/types";

interface payload {
  startDate: string | null;
  endDate: string | null;
}

const initialState: payload = {
  startDate: null,
  endDate: null,
};

const reducer = (state: object = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE:
      return action.payload as payload;
    case ActionType.CLEAR:
      return state;
    default:
      return state;
  }
};

export default reducer;
