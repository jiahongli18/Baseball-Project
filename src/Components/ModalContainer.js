import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PlayerList from './PlayerList';

class ModalContainer extends React.Component {
  render() {
    const { team, open, close } = this.props;
    return team && (
      <Modal
        size='small'
        open={open}
      >
        <Modal.Header>{team.name}</Modal.Header>
        <PlayerList id={team.id} />
        <Button onClick={() => close()}>
          Close
        </Button>
      </Modal>
    );
  }
}

export default ModalContainer;
