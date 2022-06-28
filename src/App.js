import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import ChallengeSection from "./Components/ChallengeSection";

const totalTime = 7;
class App extends React.Component {
  /*class states */
  state = {
    selectedParagraph: "hello world!, my name is Ndumiso Thela",
    timerStarted: false,
    timeRemaining: totalTime,
    words: 5,
    characters: 10,
    wpm: 2,
  };
  render() {
    return (
      <div className="app">
        {/*Nav section */}
        <Nav />

        {/*landing page section */}
        <Landing />

        {/*challenge  section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
        />
        {/*footer section */}
        <Footer />
      </div>
    );
  }
}

export default App;
