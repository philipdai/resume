var React = require("react");

var Button = React.createClass({
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      button: true,
      blue: this.props.isBlue,
      orange: this.props.isOrange
    });
    return (
      <a href="#" className={classes}>{this.props.text}</a>
    );
  }
});

module.exports = Button;


