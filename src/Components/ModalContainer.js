import Modal from "react-modal";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PlayerList from "../Components/PlayerList";

const ModalContainer = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="light"
        size="lg"
        block
        onClick={() => setModalIsOpen(true)}
      >
        {props.teamName}
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            background: "grey",
            content: "orange"
          }
        }}
      >
        <h1>
          <center>{props.teamName}</center>
        </h1>
        <PlayerList id={props.teamId}></PlayerList>
        <Button variant="warning" onClick={() => setModalIsOpen(false)}>
          Close
        </Button>
      </Modal>
    </div>
  );
};

export default ModalContainer;
