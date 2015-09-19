var Books = React.createClass({
  render: function() {
    return (
      <div className="books clearfix">
        <p>Below are the books I read recently.</p>
        <div className="book">
          <img src="images/cover_3d_move2github.jpg" alt="A book about github" className="cover" />
        </div>
        <div className="book">
          <img src="images/http.jpg" alt="A book about http protocle" className="cover" />
        </div>
        <div className="book">
          <img src="images/tlcl.jpg" alt="A book about linux command line" className="cover" />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Books />, document.getElementById("books"));