import Modal from "react-modal";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const PlayerModalContainer = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="light"
        size="lg"
        block
        onClick={() => setModalIsOpen(true)}
      >
        {props.playerName}
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <h1>
          <center>{props.playerName}</center>
        </h1>
        <p>
          <h2>Age: 40</h2>
          <h2>Height: 6'1</h2>
          <h2>Weight: 160 lbs</h2>
        </p>
        <Button variant="warning" onClick={() => setModalIsOpen(false)}>
          Close
        </Button>
      </Modal>
    </div>
  );
};

export default PlayerModalContainer;
