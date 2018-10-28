import React, { Component } from "react";
import createRandomHex from "../hexLogic";

class Colors extends Component {
  state = {
    difficulty: 6,
    colors: [],
    winner: undefined,
    headingColor: "#2c8e99"
  };

  handleNewColors = () => {
    let hex = [];
    for (let i = 0; i < this.state.difficulty; i++) {
      hex.push(createRandomHex());
    }

    let winner = hex[Math.floor(Math.random() * hex.length)];

    this.setState({
      colors: hex,
      winner: winner,
      headingColor: "#2c8e99"
    });
  };

  handleDifficulty = num => {
    this.setState({ difficulty: num });
  };

  handleDecision = c => {
    if (c === this.state.winner) {
      this.setState({ headingColor: c });
    }
  };

  render() {
    return (
      <div>
        <h1
          className="heading-text"
          style={{ backgroundColor: this.state.headingColor }}
        >
          THE GREAT <span className="color-display">{this.state.winner}</span>
          COLOR GAME
        </h1>
        <div className="stripe">
          <button
            className="reset btn btn-primary"
            onClick={() => this.handleNewColors()}
          >
            New Colors
          </button>
          <span className="message">
            {this.state.winner === this.state.headingColor ? "YOU WIN!" : ""}
          </span>
          <button
            className="mode btn btn-success"
            onClick={() => this.handleDifficulty(6)}
          >
            Easy
          </button>
          <button
            className="mode selected btn btn-danger"
            onClick={() => this.handleDifficulty(9)}
          >
            Hard
          </button>
        </div>
        <div className="container">
          {this.state.colors.map(c => (
            <div
              className="square"
              style={{ backgroundColor: c }}
              onClick={() => this.handleDecision(c)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Colors;