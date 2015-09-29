var React = require('react');
var Modal = require('react-modal');

var appElement = document.getElementById('example');

Modal.setAppElement('#example');

var App = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleModalCloseRequest: function() {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({modalIsOpen: false});
  },

  handleInputChange: function() {
    this.setState({foo: 'bar'});
  },

  render: function() {
    return (
      <div>
        <button onClick={this.openModal}>Report a crime</button>
        <Modal
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}>
          <h1>Hello</h1>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input onChange={this.handleInputChange} />
            <input />
            <input />
            <input />
            <input />
          </form>
        </Modal>
      </div>
    );
  }
});

React.render(<App/>, appElement);
