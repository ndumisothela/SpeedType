import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import ChallengeSection from "./Components/ChallengeSection";

const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
class App extends React.Component {
  /*class states */
  state = {
    selectedParagraph: "hello world!, my name is Ndumiso Thela",
    timerStarted: false,
    timeRemaining: totalTime,
    words: 5,
    characters: 10,
    wpm: 2,
    testInfo: [],
  };

  componentDidMount() {
    /*fetch(serviceUrl)
        .then((response) => response.text())
        .then((data) => {
          this.setState({ selectedParagraph: data });
        });*/
    const selectedParagraphArray = this.state.selectedParagraph.split(""); //spliting the paragraph into each letter
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted", //status for each letter, correct,incorrect or notAttempted
      };
    });
    this.setState({ testInfo: testInfo });
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // change the WPM
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        }); //after every secend update timeRemaining
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  handleUserInput = (inputValue) => {
    //start the timer ..calling the startTimer function
    if (!this.state.timerStarted) this.startTimer();
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
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
        />
        {/*footer section */}
        <Footer />
      </div>
    );
  }
}

export default App;
