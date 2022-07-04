import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import ChallengeSection from "./Components/ChallengeSection";
import { SAMPLE_PARAGRAPHS } from "./SampleParagraph";

const totalTime = 100;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
  selectedParagraph: " ",
  timerStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};
class App extends React.Component {
  /*class states */
  state = defaultState;
  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];
    const selectedParagraphArray = data.split(""); //spliting the paragraph into each letter
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted", //status for each letter, correct,incorrect or notAttempted
      };
    });
    this.setState({ ...defaultState, testInfo, selectedParagraph: data });
  };
  fetchNewParagraph = () => {
    fetch(serviceUrl)
      .then((response) => response.text())
      .then((data) => {
        const selectedParagraphArray = data.split(""); //spliting the paragraph into each letter
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted", //status for each letter, correct,incorrect or notAttempted
          };
        });
        this.setState({ ...defaultState, testInfo, selectedParagraph: data });
      });
  };
  componentDidMount() {
    this.fetchNewParagraphFallback();
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
  startAgain = () => {
    this.fetchNewParagraphFallback();
  };

  handleUserInput = (inputValue) => {
    //start the timer ..calling the startTimer function
    if (!this.state.timerStarted) this.startTimer();

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            //handling the underflow case - all the characters should be shown as not-attempted. early exit
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }
    //handling the overflo case - early exit
    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }
    // make a copy of testInfo
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1));
    testInfo[index + 1].status = "notAttempted";

    //check for correct typed letters
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    //update the testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    //update the state
    this.setState({
      testInfo,
      characters,
      words,
    });
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
          startAgain={this.startAgain}
        />
        {/*footer section */}
        <Footer />
      </div>
    );
  }
}

export default App;
