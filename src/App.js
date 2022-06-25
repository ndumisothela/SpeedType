import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import ChallengeSection from "./Components/ChallengeSection";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/*Nav section */}
        <Nav />

        {/*landing page section */}
        <Landing />

        {/*challenge  section */}
        <ChallengeSection />
        {/*footer section */}
        <Footer />
      </div>
    );
  }
}

export default App;
