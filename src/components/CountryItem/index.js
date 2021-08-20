import React from "react";
import {
  ListItem,
  Card,
  CardTitle,
  CardDescription,
} from "./CountryItemElements";

const CountryItem = () => {
  return (
    <ListItem>
      <Card>
        <CardTitle>
          <CardDescription></CardDescription>
        </CardTitle>
      </Card>
    </ListItem>
  );
};

export default CountryItem;
