import React, { Component } from 'react';


class Affichage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div className="button">
      <h1>{this.props.affichageDuChrono}</h1>
      </div>
  );
  }}
 
  export default Affichage;