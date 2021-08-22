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
  grid-gap: 10px;
  padding: 10px 20px;

  @media screen and (max-width: 1024px) {
    grid-gap: 15px;
  }

  @media screen and (max-width: 576px) {
    grid-gap: 0px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 2fr 2fr;
    padding: 0;
  }
`;

export const ButtonWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vw;
  padding: 10px;
  top: 100%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -20%);

  @media screen and (max-width: 1024px) {
    top: 100%;
    left: 50%;
    transform: translate(-50%, 20%);
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 7px;
  margin: 5px;
  padding: 7px 10px;
  cursor: pointer;
  color: ${COLORS.white};
  font-size: 18px;
  background-color: ${COLORS.dark};
  transition: all 0.1s ease-out;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 1024px) {
    margin: 3px;
    padding: 6px 9px;
    font-size: 15px;
  }

  @media screen and (max-width: 576px) {
    margin: 3px;
    padding: 4px 7px;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    margin: 15px 2px 0px 2px;
    padding: 4px 7px;
    font-size: 12px;
  }

  @media screen and (max-width: 360px) {
    margin: 2px;
    padding: 3px 6px;
    font-size: 13px;
  }
`;
