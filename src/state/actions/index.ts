import { ActionType } from "./types";
interface DateUpdate {
  type: ActionType.UPDATE;
  payload: object;
}

interface DateClear {
  type: ActionType.CLEAR;
}

export type Action = DateUpdate | DateClear;
