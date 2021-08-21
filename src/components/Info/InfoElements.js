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
  color: ${COLORS.dark};
`;

export const WorldIcon = styled(GiWorld)`
  font-size: 44px;
  color: ${COLORS.blue};
`;
