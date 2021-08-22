import styled from "styled-components";
import { AiFillCloseSquare } from "react-icons/ai";

export const CloseIcon = styled(AiFillCloseSquare)`
  font-size: 20px;
  float: right;
  margin-bottom: 4px;
  cursor: pointer;
  transition: 0.1s all ease-out;
  border-radius: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 30px 0px 15px 0;
`;

export const Title = styled.h2``;

export const SubTitle = styled.h4``;

export const CardBody = styled.div`
  padding: 20px 0;
`;

export const CardBodyItem = styled.div`
  display: flex;
  padding: 5px 0;
`;

export const Paragraph = styled.p`
  padding: 0 5px;
`;

export const Image = styled.img`
  width: 20%;
  /* height: 100px; */
  height: auto;
  border-radius: 7px;
`;

export const Sup = styled.sup`
  font-size: 8px;
`;

export const LoadingElement = styled.div`
  height: 280px;
  border-radius: 7px;
  @media screen and (max-width: 768px) {
    height: 190px;
  }
`;

export const ContainerElement = styled.div`
  height: 280px;
  border-radius: 7px;
  @media screen and (max-width: 768px) {
    height: 190px;
  }
`;

export const MapElement = styled.div`
  height: 280px;
  border-radius: 7px;
  @media screen and (max-width: 768px) {
    height: 190px;
  }
`;
