import React from "react";
import MyMapComponent from "../Map";
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
  LoadingElement,
  ContainerElement,
  MapElement,
} from "./CountryDetailsElements";

/* ADD KEY TO .ENV !!! */
const key = "AIzaSyAt2Rvv2QN6YJD9r4TrWXeY6CzSdeU8WHY";
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
      <MyMapComponent
        coordinates={props.latlng}
        itemKey={props.name}
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
        loadingElement={<LoadingElement />}
        containerElement={<ContainerElement />}
        mapElement={<MapElement />}
      />
    </Modal>
  );
};

export default CountryDetails;
