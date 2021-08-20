import React from "react";
import {
  ListItem,
  Card,
  CardTitle,
  CardDescription,
} from "./CountryItemElements";

const CountryItem = (props) => {
  // console.log("a,l", props.key);
  return (
    <ListItem>
      <Card>
        <CardTitle></CardTitle>
        <CardDescription>{props.name}</CardDescription>
        <CardDescription>{props.population}</CardDescription>
      </Card>
    </ListItem>
  );
};

export default CountryItem;
