import React, { Component } from 'react';


class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valeurChamp: '',
      taches: []
    };

    this.ecrireUneTache = this.ecrireUneTache.bind(this);
    this.ajouterUneTache = this.ajouterUneTache.bind(this);

  }

  ecrireUneTache(event) {
    this.setState({ valeurChamp: event.target.value })
  }

  ajouterUneTache() {
    this.setState({ taches: [...this.state.taches, this.state.valeurChamp] })
  }

  supprimerUnetache(e) {
    this.setState({
      taches: [...this.state.taches.slice(0, e), ...this.state.taches.slice(e + 1)]
    });

  }

  finirUneTache() {
    this.setState({ taches: [...this.state.taches, this.state.valeurChamp] })
  }

  render() {
    console.log('pwett', this.state)
    return (
      <div className="App" >
        <input type="text" value={this.state.valeurChamp} onChange={this.ecrireUneTache} />

        <button onClick={this.ajouterUneTache}>Ajout d'une tache</button>
        {this.state.taches.map((add, element, finir) => (
          <div>
            <p>{add}</p>
            <button onClick={() => this.supprimerUnetache(element)}>Supprimer</button>
            <input type="checkbox" onchange={()=> this.finirUneTache} />
          </div>
        ))}
      </div>
    );
  }
}

export default ToDoList;