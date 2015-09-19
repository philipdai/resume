var App = React.createClass({
  render: function() {
    return (
      <div>
        <Action />
        <Haoduo />
        <Books />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));