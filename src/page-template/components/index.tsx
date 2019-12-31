import React from "react";
import Provider from "../store";
import Container from "./Container";

interface IProps {
  contents: React.ReactNode[];
}

function PageTemplate({ contents }: IProps) {
  return (
    <Provider>
      <Container contents={contents} />
    </Provider>
  );
}

export default PageTemplate;
