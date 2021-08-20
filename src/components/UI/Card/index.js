import React from "react";
import { CardContainer } from "./CardElements";

const Card = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
