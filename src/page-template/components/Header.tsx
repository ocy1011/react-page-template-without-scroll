import React from "react";
import styled from "styled-components";
import { HEADER_HEIGHT, PRIMARY_COLOR } from "../constants";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: ${PRIMARY_COLOR};
`;

function Header() {
  return <Background></Background>;
}

export default Header;
