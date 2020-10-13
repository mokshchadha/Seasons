import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.error(err)
    );
  }
  render() {
    if (this.state.lat) return <div>latitude:{this.state.lat}</div>;
    else return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
