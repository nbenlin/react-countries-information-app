import styled from "styled-components";
import { GiWorld } from "react-icons/gi";
import { COLORS } from "../../colors";

export const Section = styled.section`
  display: flex;
  height: 10vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

export const Title = styled.h1`
  padding: 28px 10px 30px 60px;
  font-size: 34px;
  color: ${COLORS.primary};

  @media screen and (max-width: 576px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }

  @media screen and (max-width: 360px) {
    font-size: 20px;
    padding: 28px 10px 30px 30px;
  }
`;

export const WorldIcon = styled(GiWorld)`
  color: ${COLORS.lightWater};
  border-bottom-left-radius: 55% 100%;
  border-bottom-right-radius: 55% 100%;
  border-top-left-radius: 55% 100%;
  border-top-right-radius: 55% 100%;
  background: ${COLORS.water};
  width: 45px;
  height: 45px;

  @media screen and (max-width: 576px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 360px) {
    width: 30px;
    height: 30px;
  }
`;
