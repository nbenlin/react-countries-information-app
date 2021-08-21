import styled from "styled-components";

export const ListItem = styled.li`
  margin: 5px;
`;

export const Card = styled.div`
  position: relative;

  border: 1px solid gray;
  border-radius: 5px;
  height: 200px;
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

export const CardTitle = styled.h2``;
export const CardSubtitle = styled.h3`
  top: 10px;
  right: 10px;
  position: absolute;
  border: 1px solid black;
  border-radius: 50%;
  padding: 15px;
`;

export const CardDescription = styled.p``;
