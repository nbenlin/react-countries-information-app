import styled from "styled-components";

export const BackdropWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Modal = styled.div`
  position: fixed;
  top: 14vh;
  left: 30%;
  width: 40%;
  height: 35vw;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  -webkit-box-shadow: 5px 5px 50px 20px rgba(0, 0, 0, 0.65);
  box-shadow: 5px 5px 50px 20px rgba(0, 0, 0, 0.65);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  /* @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  } */

  @media screen and (max-width: 768px) {
    width: 50%;
    left: calc(50% - 190px);
    top: 15vh;
    height: 75vw;
    -webkit-box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.65);
    box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.65);
  }
`;

export const Content = styled.div``;
