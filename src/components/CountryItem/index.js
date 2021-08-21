import React, { useState } from "react";
import {
  ListItem,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
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
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.alpha3Code}</CardSubtitle>
        </CardHeader>
        <CardBody>
          {/* <CardDescription>Capital city: {props.capital}</CardDescription> */}
        </CardBody>
      </Card>
    </ListItem>
  );
};

export default CountryItem;
