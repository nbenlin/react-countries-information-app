import styled from "styled-components";
import { COLORS } from "../../colors";

export const Filter = styled.div`
  padding: 10px 20px;
`;

export const FilterControl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SelectFilter = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;

export const Label = styled.label`
  width: 60%;
  cursor: pointer;
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  border-bottom: 1px solid black;
  /* border-radius: 3px; */

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  &:focus {
    outline: none;
  }
`;

export const InputFilter = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: flex-end;
`;

export const Input = styled.input`
  margin-left: 10px;
  padding: 0px 20px;
  border: none;
  border-bottom: 1px solid ${COLORS.dark};
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
