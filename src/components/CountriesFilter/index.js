import React from "react";
import {
  Filter,
  FilterControl,
  Label,
  Select,
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
    </Filter>
  );
};

export default CountriesFilter;
