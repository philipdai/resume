var React = require("react/addons");
var Button = require('./Button.js');

var Action = React.createClass({
	  render: function() {
	    return (
	      <div className="action shake shake-slow clearfix">
					<Button text={"This guys is a very funny. :)"} isBlue={true}/>
	      </div>
	    );
	  }
	});

module.exports = Action;

