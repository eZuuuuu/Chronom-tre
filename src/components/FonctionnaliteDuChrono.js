import React, { Component } from 'react';


class FonctionnaliteDuChrono extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('fonctionnaliteDuChronoPlusUn',this.props.fonctionnaliteDuChronoPlusUn);
     const  fonctionnaliteDuChrono = this.props.fonctionnaliteDuChrono;
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
      </div>
  );
  }}
 

  export default FonctionnaliteDuChrono;