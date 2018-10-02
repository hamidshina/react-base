import Modal from 'react-modal';
import React, { Component } from 'react';
import '.modal.css'
Modal.setAppElement('body');

export default class  extends Component {
  state = {modalIsOpen : false}

componentWillMount(){
  this.setState({modalIsOpen : this.props.isOpen})
}
  render() {
      return (
            <Modal
              onRequestClose={()=> this.setState({modalIsOpen:false}) }
              isOpen={ this.state.modalIsOpen}
              style={{
                overlay: {
                  backgroundColor: 'rgba(1, 1, 1, 0.75)'
                },
                content: {
                  border: '0',
                  borderRadius: '4px',
                  bottom: 'auto',
                  minHeight: '10rem',
                  left: '50%',
                  padding: '15px',
                  position: 'fixed',
                  right: 'auto',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                  minWidth: '20rem',
                  width: '30%',
                  maxWidth: '60rem',
                  textAlign : 'right',
                  'dir' : 'right'
                }
              }}
            >
              <h3 id="heading" style={{textAlign:'right'}}>{this.props.title}</h3>
              <div id="full_description">
                {this.props.children}
              </div>
            </Modal>
      )
  }
}
