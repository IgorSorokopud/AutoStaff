
import { connect } from 'react-redux';
import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { showModal } from '../../actions/modal';
import Login from '../../components/Login'
import Performer from '../../components/Performer'

class Modal extends React.Component {

  handleClick = () => this.props.modal({isShowingModal: true})
  handleClose = () => this.props.modal({isShowingModal: false})
  switchMode(val) {
    switch (val) {
      case "Login":
        return <Login />
        break;
      case "Performer":
        return <Performer />
        break;
        default:
    }
  }

  render() {
    return <div onClick={this.handleClick}>
      {
        this.props.stateModal.isShowingModal &&
        <ModalContainer onClose={this.handleClose}>
          <ModalDialog onClose={this.handleClose}>
            {this.switchMode(this.props.stateModal.mode)}
          </ModalDialog>
        </ModalContainer>
      }
    </div>;
  }
}

export default connect(
  state => ({
    stateModal: state.modal
  }),
  dispatch => ({
    modal: (data) => {
      dispatch(showModal(data));
    }
  })
)(Modal);
