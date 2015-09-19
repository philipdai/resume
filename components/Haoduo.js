var NewComponent = React.createClass({
  render: function() {
    return (
      <div className="haoduo clearfix">
        <h2>Hello world, I'm Philip Dai!</h2>
        <p>Glad to share stories with you guys here.</p>
        <a href="https://github.com/philipdai" className="visit-my-github">Visit My Github</a>
      </div>
    );
  }
});

ReactDOM.render(<Action />, document.getElementById("haoduo"));