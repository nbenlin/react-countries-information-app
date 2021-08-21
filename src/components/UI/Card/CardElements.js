import styled from "styled-components";
import { COLORS } from "../../../colors";

export const CardContainer = styled.div`
  margin: 50px 150px;
  padding: 14px 40px;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  height: 80vh;
`;

export const CardTitle = styled.h2`
  padding: 0px 20px;
  position: relative;
  color: ${COLORS.dark};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 40px;
  margin-bottom: 40px;

  &::before {
    content: "";
    position: absolute;
    left: 60px;
    bottom: -10px;
    width: 150px;
    height: 1.5px;
    background: ${COLORS.dark};
    border-radius: 20px;
  }
`;
