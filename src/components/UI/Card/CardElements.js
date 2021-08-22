import styled from "styled-components";
import { COLORS } from "../../../colors";

export const CardContainer = styled.div`
  position: relative;
  margin: 50px 150px;
  padding: 14px 40px;
  height: 80vh;

  @media screen and (max-width: 1024px) {
    margin: 25px 75px;
    padding: 14px 40px;
    height: 80vh;
  }
  @media screen and (max-width: 576px) {
    margin: 25px 5px;
  }

  @media screen and (max-width: 360px) {
    margin: 10px 0px;
  }
`;

export const CardTitle = styled.h2`
  padding: 0px 20px;
  position: relative;
  color: ${COLORS.dark};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 20px;
  margin-bottom: 40px;

  &::before {
    content: "";
    position: absolute;
    left: 60px;
    bottom: -10px;
    width: 200px;
    height: 1.5px;
    background: ${COLORS.dark};
    border-radius: 20px;
    @media screen and (max-width: 1024px) {
      width: 160px;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }

  @media screen and (max-width: 576px) {
    font-size: 22px;
    margin-top: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;
