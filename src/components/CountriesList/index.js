import React, { useState } from "react";
import {
  List,
  Fallback,
  ButtonWrap,
  Button,
  ListWrap,
} from "./CountriesListElements";
import CountryItem from "../CountryItem";

const CountriesList = (props) => {
  const { items } = props;
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 6; // adjust to get various items per page

  if (props.items.length === 0) {
    return <Fallback>Found no countries.</Fallback>;
  }

  const changePage = (offset) => {
    setOffset(offset);
  };
  let listItems = [];
  for (
    let i = offset * itemsPerPage;
    i < offset * itemsPerPage + itemsPerPage;
    i++
  ) {
    if (i >= items.length) {
      break;
    }
    listItems.push(items[i]);
  }

  listItems = listItems.map((item, idx) => {
    return (
      <CountryItem
        key={`list-${idx}`}
        id={item.callingCodes}
        name={item.name}
        population={item.population}
        capital={item.capital}
        region={item.region}
        subregion={item.subregion}
        area={item.area}
        flag={item.flag}
        alpha3Code={item.alpha3Code}
        latlng={item.latlng}
      />
    );
  });

  const btns = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    const elem = <Button onClick={() => changePage(i - 1)}>{i}</Button>;
    btns.push(elem);
  }

  return (
    <ListWrap>
      <List>{listItems}</List>
      <ButtonWrap>{btns}</ButtonWrap>
    </ListWrap>
  );
};

export default CountriesList;
