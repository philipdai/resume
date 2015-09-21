var React = require('react');
var CoverPhoto = require('./CoverPhoto.js');
var Social = require('./Social.js');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <CoverPhoto />
        <Social />
      </header>
    );
  }
});

module.exports = Header;