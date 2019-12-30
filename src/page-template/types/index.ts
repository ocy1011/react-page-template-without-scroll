import { Dispatch } from "react";

export interface IState {
  contents?: React.ReactNode[];
  currentIndex: number;
  isMoving: boolean;
  touchY?: number;
}

export interface IAction {
  type: string;
  contents?: React.ReactNode[];
  index?: number;
  touchY?: number;
}

export interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}
