import React, { Component } from 'react';
import Affichage from "./Affichage";
import FonctionnaliteDuChrono from "./FonctionnaliteDuChrono"


class Chronometre extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compteurBase: 0 }

  }

  modificationDuStatePlusUn() {
    this.setState({ compteurBase: this.state.compteurBase + 1 });
  };


  modificationDuStateMoinsUn() {
    this.setState({ compteurBase: this.state.compteurBase - 1 });
  };

  modificationDuStateRemiseAZero() {
    this.setState({ compteurBase: this.state.compteurBase = 0});
  };

  modificationTimer() {
    this.interval = setInterval(
      () => {
        this.setState({ compteurBase: this.state.compteurBase + 1 });
      }
      , 1000)
  };

  pauseTimer() {
    clearInterval(this.interval)
  };

  revenirAZero() {
    console.log("re start", this.revenirAZero)
    this.setState({ compteurBase: 0 })
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="App" >
        <button onClick={event => {
          {
            this.revenirAZero();
          }
        }}>RE START</button>
        <button onClick={event => {
          {
            this.pauseTimer();
          }
        }}>Pause</button>
        <button onClick={event => {
          {
            this.modificationTimer();
          }
        }}>START</button>
        <Affichage affichageDuChrono={this.state.compteurBase} />
        <FonctionnaliteDuChrono fonctionnaliteDuChrono={this.state.compteurBase} fonctionnaliteDuChronoPlusUn={() => this.modificationDuStatePlusUn()}
          fonctionnaliteDuChronoMoinsUn={() => this.modificationDuStateMoinsUn()} fonctionnaliteDuChronoRemiseAZero={() => this.modificationDuStateRemiseAZero()} />

      </div>
    );
  }
}

export default Chronometre;

// {compteurBase: this.state.compteurBase })