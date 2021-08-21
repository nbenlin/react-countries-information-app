import styled from "styled-components";
import { COLORS } from "../../colors";

export const Filter = styled.div`
  padding: 10px 20px;
  -webkit-box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 18px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const FilterControl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SelectFilter = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
`;

export const Label = styled.label`
  width: 60%;
  cursor: pointer;
  font-size: 15px;
`;

export const Select = styled.select`
  width: 100%;
  height: 26px;
  background: ${COLORS.white};
  color: gray;
  padding-left: 5px;
  font-size: 15px;
  border: none;
  margin-left: 10px;
  border-bottom: 1px solid black;

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

export const InputFilter = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: flex-end;
`;

export const Input = styled.input`
  height: 26px;
  margin-left: 10px;
  padding: 0px 20px;
  font-size: 18px;
  color: ${COLORS.dark};
  font-weight: 300;
  border: none;
  border-bottom: 1px solid ${COLORS.dark};
  text-transform: capitalize;
  &:focus {
    outline: 0;
  }
`;
