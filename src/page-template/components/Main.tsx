import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../store";
import getActions from "../actions/main";
import Content from "./Content";
import { MOVE_SPEED_SECOND } from "../constants/index";

const Background = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
`;

const Container = styled.div<{ height: string; top: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  transition: top ${MOVE_SPEED_SECOND}s;
`;

function Main() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const {
    getContents,
    getTopPercent,
    getHeight,
    getIsMoving,
    handleWheel,
    handleTouchMove,
    finishMove,
  } = getActions(useContext(Context));
  const contents = getContents();
  const top = getTopPercent();
  const isMoving = getIsMoving();

  // onTransitionEnd={finishMove} 를 사용하지 않는 이유
  // transitionEnd를 포착하지 못할 때가 있음
  useEffect(() => {
    if (!isMoving) return;
    setTimeout(finishMove, MOVE_SPEED_SECOND * 1000);
  }, [isMoving, finishMove]);

  return (
    <Background
      ref={backgroundRef}
      onWheel={handleWheel}
      onTouchMove={handleTouchMove}
    >
      <Container height={getHeight()} top={top}>
        {contents.map((content, index) => (
          <Content key={index}>{content}</Content>
        ))}
      </Container>
    </Background>
  );
}

export default Main;
