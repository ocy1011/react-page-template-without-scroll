import { IState, IAction } from "../types";
import {
  UPDATE_CONTENTS,
  UPDATE_INDEX,
  FINISH_MOVE,
  UPDATE_TOUCH_Y,
} from "../constants/actionTypes";
import {
  updateContents,
  updateIndex,
  finishMove,
  updateTouchY,
} from "../actions/reducer";

export const initialState: IState = {
  contents: [],
  currentIndex: 0,
  isMoving: false,
};

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case UPDATE_CONTENTS:
      return updateContents(state, action);
    case UPDATE_INDEX:
      return updateIndex(state, action);
    case FINISH_MOVE:
      return finishMove(state);
    case UPDATE_TOUCH_Y:
      return updateTouchY(state, action);
    default:
      return state;
  }
}
