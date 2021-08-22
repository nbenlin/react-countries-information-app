import styled from "styled-components";
import { COLORS } from "../../colors";

export const Filter = styled.div`
  padding: 10px 20px;
  -webkit-box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
`;

export const FilterControl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const SelectFilter = styled.div`
  display: flex;
  align-items: center;
  width: 35%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
    margin: 10px 0;
  }
`;

export const InputFilter = styled.div`
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
    margin: 10px 0;
  }
`;

export const Label = styled.label`
  width: 60%;
  cursor: pointer;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 400px;
  height: 26px;
  background: ${COLORS.white};
  color: gray;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid ${COLORS.black};

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  height: 26px;
  padding: 0px 2px 1px;
  font-size: 14px;
  line-height: 4px;
`;

export const Input = styled.input`
  width: 400px;
  height: 26px;
  font-size: 18px;
  color: ${COLORS.dark};
  font-weight: 300;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  text-transform: capitalize;
  &:focus {
    outline: 0;
  }
`;
