import React, { useState } from "react";
import {
  ListItem,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "./CountryItemElements";
import CountryDetails from "../CountryDetails";

const CountryItem = (props) => {
  const [detailsIsShown, setDetailsIsShown] = useState(false);

  const showDetailsClickHandler = () => {
    setDetailsIsShown(true);
  };
  const hideDetilsClickHandler = () => {
    setDetailsIsShown(false);
  };

  return (
    <ListItem>
      {detailsIsShown && (
        <CountryDetails
          name={props.items.name}
          capital={props.items.capital}
          region={props.items.region}
          subregion={props.items.subregion}
          population={props.items.population}
          area={props.items.area}
          flag={props.items.flag}
          latlng={props.items.latlng}
          onCLose={hideDetilsClickHandler}
        />
      )}
      <Card onClick={showDetailsClickHandler}>
        <CardHeader>
          <CardTitle>{props.items.name}</CardTitle>
          <CardSubtitle>{props.items.alpha3Code}</CardSubtitle>
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    </ListItem>
  );
};

export default CountryItem;
