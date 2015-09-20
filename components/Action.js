var React = require("react/addons");
var Button = require('./Button.js');

var Action = React.createClass({
	  render: function() {
	    return (
	      <div className="action clearfix">
					<Button text={"This guys has few photos, but many skills."} isOrange={true}/>
	      </div>
	    );
	  }
	});

module.exports = Action;

