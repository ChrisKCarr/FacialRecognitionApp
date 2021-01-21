import React, { Component } from "react";
import Clarifai from "clarifai";
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import FaceRecognition from "./components/facerecognition/facerecognition";
import ImageLinkForm from "./components/imagelinkform/imagelinkform";
import Rank from "./components/rank/rank";
import Particles from "react-particles-js";

import "./App.css";

const app = new Clarifai.App({
  apiKey: "2aca52642c3a41038958130b6cb09b84",
});

const particlesOptions = {
  particles: {
    number: {
      value: 200,
    },
    size: {
      value: 2,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  calculateFaceLocation = (data) => {};

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models

      .predict(
        Clarifai.FACE_DETECT_MODEL,

        this.state.input
      )

      .then((response) => this.calculateFaceLocation(response))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
