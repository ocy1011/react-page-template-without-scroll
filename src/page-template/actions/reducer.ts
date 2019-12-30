import { IState, IAction } from "../types";

export function updateContents(state: IState, action: IAction) {
  return { ...state, contents: action.contents };
}

export function updateIndex(state: IState, action: IAction) {
  const currentIndex = action.index!;
  return { ...state, isMoving: true, currentIndex, touchY: undefined };
}

export function updateTouchY(state: IState, action: IAction) {
  return { ...state, touchY: action.touchY };
}

export function finishMove(state: IState) {
  return { ...state, isMoving: false };
}
