import React from "react";
import { Modal } from "../UI/Modal/ModelElements";
import { CloseIcon } from "./CountryDetailsElements";

const CountryDetails = (props) => {
  return (
    <Modal>
      <CloseIcon onClick={props.onCLose} />
      <p>{props.name}</p>
      <p>{props.capital}</p>
      <p>{props.region}</p>
      <p>{props.subregion}</p>
      <p>{props.population}</p>
      <p>{props.area}</p>
      <img src={props.flag} />
    </Modal>
  );
};

export default CountryDetails;
