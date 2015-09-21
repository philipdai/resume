var React = require('react');

var CoverPhoto = React.createClass({
  render: function() {
    return (
      <div className="cover_photo">
        <img src="images/my_photo.jpg" alt="Philip's photo" className="avatar" />
      </div>
    );
  }
});

module.exports = CoverPhoto;