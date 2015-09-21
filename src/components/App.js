var React = require("react");
var Header = require("./Header/Index.js");
var Action = require("./Action.js");
var Haoduo = require("./Haoduo.js");
var Books = require("./Books.js");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Action />
        <Haoduo />
        <Books />
      </div>
    );
  }
});

module.exports = App;
