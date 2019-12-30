import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store";
import { DOT_SIZE, PRIMARY_COLOR, MOVE_SPEED_SECOND } from "../constants";
import getActions from "../actions/dot";

const CIRCLE_SIZE = "50%";

const Background = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${DOT_SIZE};
  height: ${DOT_SIZE};
`;

const Circle = styled.div<{ isActive: boolean }>`
  width: ${CIRCLE_SIZE};
  height: ${CIRCLE_SIZE};
  border-radius: 50%;
  border: 3px solid ${PRIMARY_COLOR};
  background-color: ${(props) => props.isActive && PRIMARY_COLOR};
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color ${MOVE_SPEED_SECOND}s;
  -webkit-tap-highlight-color: transparent;
`;

interface IProps {
  index: number;
}

function Dot({ index }: IProps) {
  const { getIsActive, handleClick } = getActions(useContext(Context));
  const isActive = getIsActive(index);
  return (
    <Background>
      <Circle onClick={() => handleClick(index)} isActive={isActive} />
    </Background>
  );
}

export default Dot;
