import React from "react";
import Content from "./Content";

const array = [1, 2, 3, 4];

export default array.map((value) => <Content>{value}</Content>);
