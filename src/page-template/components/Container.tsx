import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../store";
import getActions from "../actions/container";
import Header from "../components/Header";
import Section from "../components/Section";
import Dots from "../components/Dots";
import Main from "../components/Main";

const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

interface IProps {
  contents: React.ReactNode[];
}

function CarouselPage({ contents }: IProps) {
  const { updateContents } = getActions(useContext(Context));

  useEffect(updateContents.bind(null, contents), [contents]);

  return (
    <Background>
      <Header></Header>
      <Section>
        <Dots />
        <Main />
      </Section>
    </Background>
  );
}

export default CarouselPage;
