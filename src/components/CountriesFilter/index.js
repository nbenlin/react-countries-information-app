import React from "react";
import {
  Filter,
  FilterControl,
  Label,
  Select,
  Input,
  InputFilter,
} from "./CountriesFilterElements";

const CountriesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  let regions = props.items.map((item) => {
    return item.region;
  });
  regions = regions.filter((region, index) => {
    return regions.indexOf(region) === index;
  });

  const inputChangeHandler = (event) => {
    props.onChangeInputFilter(event.target.value.toLowerCase());
  };

  return (
    <Filter>
      <FilterControl>
        <Label>Filter country by region</Label>
        <Select value={props.selected} onChange={dropdownChangeHandler}>
          {regions.map(
            (region) =>
              region !== "" && (
                <option key={region} value={region}>
                  {region}
                </option>
              )
          )}
        </Select>
      </FilterControl>
      <InputFilter>
        <Label>Filter country by name</Label>
        <Input type="text" onChange={inputChangeHandler} />
      </InputFilter>
    </Filter>
  );
};

export default CountriesFilter;
