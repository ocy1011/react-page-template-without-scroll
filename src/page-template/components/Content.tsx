import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  overflow: hidden;
`;

interface IProps {
  children: React.ReactNode;
}

function Content({ children }: IProps) {
  return <Background>{children}</Background>;
}

export default Content;
