import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store";
import { DOT_SIZE } from "../constants";
import { getContents } from "../actions";
import Dot from "./Dot";

const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${DOT_SIZE};
  height: 100%;
`;

function Dots() {
  const { state } = useContext(Context);
  const contents = getContents(state);
  return (
    <Background>
      {contents.map((content, index) => (
        <Dot key={index} index={index} />
      ))}
    </Background>
  );
}

export default Dots;
