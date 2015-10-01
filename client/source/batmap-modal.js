var React = require('react');
var Modal = require('react-modal');
var ModalForm = require('./form')
var PoliceNumber = require('./police')

module.exports = React.createClass({

  getInitialState: function() {
    return {
      modalIsOpen: false,
      lifeThreatening: false
    };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleModalCloseRequest: function() {
    this.setState({modalIsOpen: false});
  },

  handleInputChange: function() {
    this.setState({lifeThreatening: !this.state.lifeThreatening})
  },

  render: function() {
    console.log('Modal: props, state', this.props, this.state)
    return (
      <div className="buttonform">
        <button onClick={this.openModal}>button</button>
        <Modal
          closeTimeoutMS={100}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}>
          <h1>Is your crime life threatening?</h1>
          <form>
            <input type="radio" name="crime" value="yes" onChange={this.handleInputChange} checked={this.state.lifeThreatening}>Yes</input>
            <input type="radio" name="crime" value="no" onChange={this.handleInputChange} checked={!this.state.lifeThreatening}>No</input>
            <br/>
          </form>
          <button className='button-close' onClick={this.closeModal}>close</button>
          {this.state.lifeThreatening ? <PoliceNumber /> : <ModalForm closeModal={this.closeModal} />}
        </Modal>
      </div>
    );
  }
});



