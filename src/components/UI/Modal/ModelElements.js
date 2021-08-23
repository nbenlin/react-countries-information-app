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
  top: 20vh;
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

  @media screen and (max-width: 1440px) {
    width: 50%;
    left: calc(50% - 350px);
    top: 18vw;
    height: 44vw;
    -webkit-box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.65);
    box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.65);
  }
  @media screen and (max-width: 1220px) {
    left: calc(50% - 300px);
    top: 18vw;
    height: 50vw;
  }

  @media screen and (max-width: 1024px) {
    left: calc(50% - 265px);
    top: 20vw;
    height: 60vw;
  }

  @media screen and (max-width: 768px) {
    left: calc(50% - 238px);
    top: 20vh;
    height: 80vw;
    width: 62%;
  }

  @media screen and (max-width: 576px) {
    left: calc(50% - 165px);
    top: 21vh;
    height: 100vw;
    width: 60%;
  }

  @media screen and (max-width: 480px) {
    left: calc(50% - 165px);
    top: 18vh;
    height: 140vw;
    width: 80%;
  }
  @media screen and (max-width: 400px) {
    left: calc(50% - 164px);
    top: 18vh;
    height: 125vw;
    width: 82%;
  }
  @media screen and (max-width: 375px) {
    left: calc(50% - 150px);
    top: 18vh;
    height: 135vw;
    width: 80%;
  }
`;

export const Content = styled.div``;
