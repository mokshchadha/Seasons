import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.error(err)
    );
  }

  render() {
    if (this.state.lat) return <SeasonDisplay lat={this.state.lat} />;
    else return <Spinner />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
