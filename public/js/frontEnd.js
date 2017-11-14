var Dev = React.createClass({

  getInitialState: function () {
    return ({
      devs: []
    });
  },

  render: function () {
    var devs = this.state.devs;
    devs = devs.map(function (dev, i) {
      return (
        <li key={i}>
          <span className={dev.obj.available}></span>
          <span className="name">{dev.obj.name}</span>
          <span className="rank">{dev.obj.rank}</span>
          <span className="dist">{Math.floor(dev.dis/ 1000)} Km</span>
        </li>
      );
    })
    return (
      <div id="ninja-container">
        <form id="search" onSubmit={this.handleSubmit}>
          <label>Enter your latitude:</label>
          <input type="text" ref="lat" placeholder="latitude" required />
          <label>Enter your longitude:</label>
          <input type="text" ref="lng" placeholder="longitude" required />
          <input type="submit" value="Find Developer" />
        </form>
        <ul>
          {devs}
        </ul>
      </div>
    );
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var lng = this.refs.lng.value;
    var lat = this.refs.lat.value;

    fetch('/api/dev?lng=' + lng + '&lat=' + lat).then(function (data) {
      return data.json();
    }).then(json => {
      this.setState({
        devs: json
      });
    });

    this.refs.lng.value = '';
    this.refs.lat.value = '';
  }

});

ReactDOM.render(<Dev />, document.getElementById('root'));