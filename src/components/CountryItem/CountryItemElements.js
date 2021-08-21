import styled from "styled-components";
import { COLORS } from "../../colors";

export const ListItem = styled.li`
  margin: 5px;
`;

export const Card = styled.div`
  position: relative;
  -webkit-box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.25);

  border-radius: 15px;
  height: 200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s all ease-out;
  &:hover {
    transform: scale(1.015);
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
  color: ${COLORS.black};
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
`;

export const CardDescription = styled.p``;
