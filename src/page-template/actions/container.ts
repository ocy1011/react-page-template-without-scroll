import { UPDATE_CONTENTS } from "../constants/actionTypes";
import { IContext } from "../types";

export default function getActions({ state, dispatch }: IContext) {
  return {
    updateContents: (contents: React.ReactNode[]) => {
      dispatch({ type: UPDATE_CONTENTS, contents });
    },
  };
}
