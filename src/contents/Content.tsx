import React from "react";
import styled from "styled-components";

const Background = styled.div`
  font-size: 20vmin;
  font-weight: bold;
`;

interface IProps {
  children: React.ReactNode;
}

function Content({ children }: IProps) {
  return <Background>{children}</Background>;
}

export default Content;
