import React, { Component } from 'react';
import Affichage from "./Affichage";
import FonctionnaliteDuChrono from "./FonctionnaliteDuChrono"


class Chronometre extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compteurBase: 0 }

  }

  // modificationDuStatePlusUn() {
  //   this.setState({ compteurBase: this.state.compteurBase + 1 });
  // };


  // modificationDuStateMoinsUn() {
  //   this.setState({ compteurBase: this.state.compteurBase - 1 });
  // };

  // modificationDuStateRemiseAZero() {
  //   this.setState({ compteurBase: this.state.compteurBase = 0});
  // };

  modificationTimer() {
    // console.log('interval', this.state.compteurBase)
    setInterval(
       ()  => {
        this.setState({ compteurBase: this.state.compteurBase + 1 });
      }
      ,1000)
    };

    pauseTimer() {
      console.log('pauseeee', this.state.pauseTimer);
      clearInterval({compteurBase: this.state.compteurBase})
      //   () => {
      //     this.setState({ compteurBase: this.state.compteurBase });
      //   }
      // )
      };
// this.state({compteurBase: this.state.compteurBase })
  render() {

      console.log('PAUSE', this.pauseTimer);
      return(
      <div className = "App" >
          <h2>{this.state.compteurBase}</h2>
          <button onClick={event => {
            {
              this.pauseTimer();
            }
          }}>Pause</button>
          <button onClick={event => {
            {
              this.modificationTimer();
            }
          }}>++</button>
        {/* <Affichage affichageDuChrono={this.state.compteurBase} /> */ }
        {/* <FonctionnaliteDuChrono fonctionnaliteDuChrono={this.state.compteurBase} fonctionnaliteDuChronoPlusUn={() => this.modificationDuStatePlusUn()}
        fonctionnaliteDuChronoMoinsUn={() => this.modificationDuStateMoinsUn()} fonctionnaliteDuChronoRemiseAZero={() => this.modificationDuStateRemiseAZero()} /> */}
        
      </div>
    );
  }
}

export default Chronometre;