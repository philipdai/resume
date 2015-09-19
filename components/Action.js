var Action = React.createClass({
	  render: function() {
	    return (
	      <div className="action clearfix">
	        <a href="#" className="action-button button">This guy has few photos, but a lot of skills.</a>
	      </div>
	    );
	  }
	});

ReactDOM.render(<Action />, document.getElementById("action"));