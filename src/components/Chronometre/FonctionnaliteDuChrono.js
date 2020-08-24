import React, { Component } from 'react';


class FonctionnaliteDuChrono extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const fonctionnaliteDuChrono = this.props.fonctionnaliteDuChrono;
    return (
      <div className="button">
        <button onClick={event => {
          this.props.fonctionnaliteDuChronoPlusUn();
        }}>++</button>
        <button onClick={event => {
          this.props.fonctionnaliteDuChronoMoinsUn();
        }}>--</button>
        <button onClick={event => {
          this.props.fonctionnaliteDuChronoRemiseAZero();
        }}>retour à zero</button>
        <button onClick={event => {
          {
            this.props.fonctionnaliteDuChronoTimer();
          }
        }}>START</button>
        <button onClick={event => {
          {
            this.props.fonctionnaliteDuChronoTimerPause();
          }
        }}>Pause</button>
        <button onClick={event => {
          {
            this.props.fonctionnaliteDuChronoTimerRestart();
          }
        }}>RE START</button>
      </div>
    );
  }
}


export default FonctionnaliteDuChrono;