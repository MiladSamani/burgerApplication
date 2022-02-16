import React from "react";
import classes from "./Modal.module.css";
import Auxillary from "../../../hoc/auxillary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Auxillary>
      <Backdrop show={props.show} clicked={props.modalClicked} />

      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={classes.Modal}
      >
        {props.children}
      </div>
    </Auxillary>
  );
};

export default Modal;