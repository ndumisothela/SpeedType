import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/*Nav section */}
        <Nav />

        {/*landing page section */}
        <Landing />

        {/*challenge  section */}

        {/*footer section */}
      </div>
    );
  }
}

export default App;
