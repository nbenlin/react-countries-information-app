import React from "react";
import { CardContainer, CardTitle } from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer>
      <CardTitle>Countries list</CardTitle>
      {props.children}
    </CardContainer>
  );
};

export default Card;
