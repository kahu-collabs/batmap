var React = require('react');

module.exports = React.createClass({

  handleSubmit: function(e) {
  	console.log('event', e)

  	var self = this

 
  	$.ajax({
  		method: 'POST',
  		url: '/api/v1/users',
  		success: function(data){
  			console.log('data in success', data)
  			// self.props.closeModal()
  		},
  		error: function(xhr, status, err) {
  			console.error(this.props.url, status, error,toString())
  		}.bind(this)
  	})
  },
  render: function(){
  	return (
  		<div className="form-modal">
  			<form onSubmit={this.handleSubmit} >
  				<h2>Contact Info</h2>
  				<h3>Name</h3>
					<input />
					<h3>Number</h3>
					<input />
					<h3>Address</h3>
					<input />
				</form>
					<button onClick={this.handleSubmit} >Submit</button>
			</div>
  	)
  }
})


