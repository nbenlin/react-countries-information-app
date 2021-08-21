import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BackdropWrap, Modal, Content } from "./ModelElements";

const Backdrop = (props) => {
  <BackdropWrap></BackdropWrap>;
};

const ModalOverlay = (props) => {
  return (
    <Modal>
      <Content>{props.children}</Content>
    </Modal>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
