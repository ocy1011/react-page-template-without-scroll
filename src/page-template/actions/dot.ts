import { UPDATE_INDEX } from "../constants/actionTypes";
import { IContext } from "../types";
import { getCurrentIndex } from "./";

export default function getActions({ state, dispatch }: IContext) {
  return {
    handleClick: (index: number) => {
      dispatch({ type: UPDATE_INDEX, index });
    },
    getIsActive: (index: number) => index === getCurrentIndex(state),
  };
}
