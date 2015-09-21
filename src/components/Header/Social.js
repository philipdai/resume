var React = require('react');

var Social = React.createClass({
  render: function() {
    return (
      <div className="social clearfix">
        <div className="social-method">
          <img src="images/gmail.png" alt="My Gmail Account" className="social-icon" />
        </div>
        <div className="social-method">
          <img src="images/twitter.png" alt="My Twitter Account" className="social-icon" />
        </div>
        <div className="social-method">
        <img src="images/facebook.png" alt="My Facebook Account" className="social-icon" />
      </div>
      </div>
    );
  }
});

module.exports = Social;