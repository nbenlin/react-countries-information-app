import styled from "styled-components";
import { COLORS } from "../../colors";

export const ListItem = styled.li`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    margin: 5px;
  }

  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`;

export const Card = styled.div`
  position: relative;
  -webkit-box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 100%;
  height: 12vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s all ease-out;
  &:hover {
    transform: scale(1.015);
  }

  @media screen and (max-width: 1024px) {
    height: 20vw;
  }

  @media screen and (max-width: 768px) {
    height: 30vw;
  }

  @media screen and (max-width: 480px) {
    height: 38vw;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CardBody = styled.div``;

export const CardTitle = styled.h2`
  font-size: 26px;
  color: ${COLORS.black};

  @media screen and (max-width: 1024px) {
    font-size: 22px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
    padding: 0 10px;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;
export const CardSubtitle = styled.h3`
  position: absolute;
  top: 10px;
  right: 10px;
  -webkit-box-shadow: 2px 1px 6px 1px #1d3557;
  box-shadow: 2px 1px 6px 1px #1d3557;
  color: ${COLORS.dark};
  border-radius: 50%;
  padding: 8px;
  font-size: 18px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 4px;
  }

  @media screen and (max-width: 576px) {
    font-size: 9px;
    padding: 2px;
  }
`;

export const CardDescription = styled.p``;
