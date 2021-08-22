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
          name={props.name}
          capital={props.capital}
          region={props.region}
          subregion={props.subregion}
          population={props.population}
          area={props.area}
          flag={props.flag}
          latlng={props.latlng}
          onCLose={hideDetilsClickHandler}
        />
      )}
      <Card onClick={showDetailsClickHandler}>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.alpha3Code}</CardSubtitle>
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    </ListItem>
  );
};

export default CountryItem;
