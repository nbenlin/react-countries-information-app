import styled from "styled-components";
import { COLORS } from "../../colors";

export const Fallback = styled.h2`
  color: red;
  text-align: center;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vw;
  padding: 10px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 7px;
  margin: 5px;
  padding: 7px 10px;
  cursor: pointer;
  color: ${COLORS.white};
  font-size: 16px;
  background-color: ${COLORS.orange};
  transition: all 0.1s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;
