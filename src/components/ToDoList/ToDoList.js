import React, { Component } from 'react';


const VALEUR_INITIALE_CHAMPS = '';

class ToDoList extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      valeurChamp: '',
      taches: [],
      validation: false,
    };

    this.ecrireUneTache = this.ecrireUneTache.bind(this);
    this.ajouterUneTache = this.ajouterUneTache.bind(this);
    this.finirUneTache = this.finirUneTache.bind(this);
    this.champReset = this.champReset.bind(this);

  }

  ecrireUneTache(event) {
    this.setState({ valeurChamp: event.target.value })
  }

  ajouterUneTache() {
    let newTaches = [...this.state.taches];
    
    let newTache = {
      titre: this.state.valeurChamp,
      terminee: false,
    }
    newTaches.push(newTache)
    this.setState({ taches: newTaches })

    this.champReset();
  }

  supprimerUnetache(index) {
    let newTaches = [...this.state.taches];
    newTaches.splice(index, 1)
    this.setState({ taches: newTaches })
  }

  finirUneTache(index) {
    let newFinirTaches = [...this.state.taches];
    let newTache = { ...newFinirTaches[index] };
    newTache.terminee = true;
    newFinirTaches.splice(index, 1, newTache)
    this.setState({ taches: newFinirTaches })
  }

  champReset() {
    this.setState({ valeurChamp: VALEUR_INITIALE_CHAMPS})
  }

  render() {
    return ([
      <div className="App">
        <input type="text" value={this.state.valeurChamp} onChange={this.ecrireUneTache} />
        <button onClick={this.ajouterUneTache}>Ajout d'une tache</button>
        
        {this.state.taches.map((tache, index, taches) => {
          return (
            <div key={index}>
              <li onClick={() => this.finirUneTache(index)} style={{ textDecoration: tache.terminee ? "line-through" : false }}><p>{tache.titre}</p></li>
              <button onClick={() => this.supprimerUnetache(index)}>Supprimer</button>
            </div>
          )
        })}
      </div>
    ]);
  }
}

export default ToDoList;