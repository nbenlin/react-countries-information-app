import React, { useState } from "react";
import {
  ListItem,
  Card,
  CardTitle,
  CardDescription,
} from "./CountryItemElements";
import CountryDetails from "../CountryDetails";

const CountryItem = (props) => {
  const [detailsIsShown, setDetailsIsShown] = useState(false);

  const showDetailsHandler = () => {
    setDetailsIsShown(true);
    console.log("clicked");
  };
  const hideDetilsHandler = () => {
    setDetailsIsShown(false);
  };

  return (
    <ListItem>
      {detailsIsShown && (
        <CountryDetails
          name={props.name}
          capital={props.capital}
          region={props.region}
          subregion={props.subregion}
          population={props.population}
          area={props.area}
          flag={props.flag}
          onCLose={hideDetilsHandler}
        />
      )}
      <Card onClick={showDetailsHandler}>
        <CardTitle>{props.capital}</CardTitle>
        <CardDescription>{props.name}</CardDescription>
        <CardDescription>{props.population}</CardDescription>
      </Card>
    </ListItem>
  );
};

export default CountryItem;
