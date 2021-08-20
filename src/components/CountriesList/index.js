import React, { useState } from "react";
import { List, Fallback } from "./CountriesListElements";
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
      />
    );
  });

  const btns = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    const elem = (
      <span className="pagination-btn" onClick={() => changePage(i - 1)}>
        {i}
      </span>
    );
    btns.push(elem);
  }

  return (
    <>
      <List>{listItems}</List>
      <div>{btns}</div>
    </>
  );
};

export default CountriesList;
