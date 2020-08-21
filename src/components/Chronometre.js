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

  render() {
    return (
      <div className="App">
        <Affichage affichageDuChrono={this.state.compteurBase} />
        <FonctionnaliteDuChrono fonctionnaliteDuChrono={this.state.compteurBase} fonctionnaliteDuChronoPlusUn={() => this.modificationDuStatePlusUn()}
        fonctionnaliteDuChronoMoinsUn={() => this.modificationDuStateMoinsUn()} fonctionnaliteDuChronoRemiseAZero={() => this.modificationDuStateRemiseAZero()} />
      </div>
    );
  }
}

export default Chronometre;

