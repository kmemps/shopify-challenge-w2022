import { combineReducers } from "redux";
import dateReducer from "./dateReducer";

const reducers = combineReducers({
  dateRange: dateReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
