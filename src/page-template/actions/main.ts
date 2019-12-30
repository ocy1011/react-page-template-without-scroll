import {
  UPDATE_INDEX,
  FINISH_MOVE,
  UPDATE_TOUCH_Y,
} from "../constants/actionTypes";
import { IContext, IState } from "../types";
import {
  getContents,
  getCurrentIndex,
  getLastIndex,
  getContentsLength,
} from "./";

function isMoving(state: IState) {
  return state.isMoving;
}

function clamp(value: number, min: number, max: number) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

function calculateNextIndex(state: IState, deltaY: number) {
  const currentIndex = getCurrentIndex(state);
  const lastIndex = getLastIndex(state);
  const deltaIndex = deltaY < 0 ? -1 : 1;
  return clamp(currentIndex + deltaIndex, 0, lastIndex);
}

export default function getActions({ state, dispatch }: IContext) {
  return {
    getContents: () => getContents(state),
    getHeight: () => `${getContentsLength(state) * 100}%`,
    getTopPercent: () => `-${getCurrentIndex(state) * 100}%`,
    getIsMoving: () => isMoving(state),
    handleWheel: (event: React.WheelEvent<HTMLDivElement>) => {
      if (isMoving(state)) return;
      const { deltaY } = event;
      const index = calculateNextIndex(state, deltaY);
      dispatch({ type: UPDATE_INDEX, index });
    },
    handleTouchMove: (event: React.TouchEvent<HTMLDivElement>) => {
      if (isMoving(state)) return;
      const { touchY } = state;
      const { clientY } = event.touches[0];
      if (touchY === undefined) {
        dispatch({ type: UPDATE_TOUCH_Y, touchY: clientY });
        return;
      }
      const deltaY = touchY - clientY;
      const index = calculateNextIndex(state, deltaY);
      dispatch({ type: UPDATE_INDEX, index });
    },
    finishMove: () => {
      dispatch({ type: FINISH_MOVE });
    },
  };
}
