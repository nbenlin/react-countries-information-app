import styled from "styled-components";

export const Filter = styled.div``;

export const FilterControl = styled.div``;

export const Label = styled.label``;

export const Select = styled.select`
  width: 10%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 3px;

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
  margin: 10px;
`;

export const Input = styled.input`
  margin: 5px;
`;
