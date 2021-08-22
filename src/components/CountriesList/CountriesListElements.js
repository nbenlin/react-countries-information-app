import styled from "styled-components";
import { COLORS } from "../../colors";

export const Fallback = styled.h2`
  color: ${COLORS.red};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ListWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

export const List = styled.ul`
  list-style: none;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  padding: 10px 10px;

  @media screen and (max-width: 1024px) {
    grid-gap: 15px;
  }
`;

export const ButtonWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vw;
  padding: 10px;

  margin-top: 60px;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, 235%);

  @media screen and (max-width: 1024px) {
    top: 89%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 7px;
  margin: 6px;
  padding: 7px 10px;
  cursor: pointer;
  color: ${COLORS.white};
  font-size: 16px;
  background-color: ${COLORS.dark};
  transition: all 0.1s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;
