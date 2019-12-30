import { IState } from "../types";

export const getContents = (state: IState) => state.contents!;
export const getContentsLength = (state: IState) => getContents(state).length;
export const getLastIndex = (state: IState) => getContentsLength(state) - 1;
export const getCurrentIndex = (state: IState) => state.currentIndex;
