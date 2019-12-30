import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  flex: 1;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

interface IProps {
  children: React.ReactNode;
}

function Section({ children }: IProps) {
  return (
    <Background>
      <Container>{children}</Container>
    </Background>
  );
}

export default Section;
