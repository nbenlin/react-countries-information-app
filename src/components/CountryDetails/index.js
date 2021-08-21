import React from "react";
import { Modal } from "../UI/Modal/ModelElements";
import {
  CloseIcon,
  Card,
  CardHeader,
  Title,
  SubTitle,
  CardBody,
  Paragraph,
  Image,
  CardBodyItem,
  Sup,
} from "./CountryDetailsElements";

const CountryDetails = (props) => {
  return (
    <Modal>
      <CloseIcon onClick={props.onCLose} />
      <Card>
        <CardHeader>
          <Title>{props.name}</Title>
          <Image src={props.flag} alt={props.name} />
        </CardHeader>
        <CardBody>
          <CardBodyItem>
            <SubTitle>Capital city:</SubTitle>
            <Paragraph>{props.capital}</Paragraph>
          </CardBodyItem>
          <CardBodyItem>
            <SubTitle>Region:</SubTitle>
            <Paragraph>{props.region}</Paragraph>
          </CardBodyItem>
          <CardBodyItem>
            <SubTitle>Population:</SubTitle>
            <Paragraph>{props.population}</Paragraph>
          </CardBodyItem>
          <CardBodyItem>
            <SubTitle>Subregion:</SubTitle>
            <Paragraph>{props.subregion}</Paragraph>
          </CardBodyItem>
          <CardBodyItem>
            <SubTitle>Area:</SubTitle>
            <Paragraph>
              {props.area}km<Sup>2</Sup>
            </Paragraph>
          </CardBodyItem>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default CountryDetails;
