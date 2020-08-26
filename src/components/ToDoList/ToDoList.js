import React, { Component } from 'react';

const CHAMP_VIDE_DEPART = "";

class ToDoLIst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champInitial: '',
      champ: [],
    }
    this.modifierChamp = this.modifierChamp.bind(this);
    this.ajouterUneTache = this.ajouterUneTache.bind(this);
    this.supprimerUnetache = this.supprimerUnetache.bind(this);
  }

  modifierChamp(event) {
    this.setState({ champInitial: event.target.value });
  };

  ajouterUneTache() {
    var champEcris = this.state.champInitial
    var champEcris2 = [...this.state.champ, { titre: champEcris, terminee: false }]
    this.setState({ champ: champEcris2 })
    this.setState({ champInitial: CHAMP_VIDE_DEPART });
  }

  supprimerUnetache(index) {
    var suppChamp = [...this.state.champ]
    suppChamp.splice(index, 1)
    this.setState({ champ: suppChamp })
  }

  tacheFinis(index) {
    var tacheEnd = [...this.state.champ]
    var tacheEnd2 = tacheEnd[index]
    tacheEnd2.terminee = true;
    tacheEnd.splice(0, tacheEnd2)
    this.setState({ champ: tacheEnd })
  }

  render() {
    return (
      <div className="App" >
        <input value={this.state.champInitial} onChange={this.modifierChamp}></input>
        <button onClick={this.ajouterUneTache}>Ajouter</button>

        {this.state.champ.map((item, index) => {
          return (
            <>
              <p><li onClick={() => this.tacheFinis(index)} style={{ textDecoration: item.terminee ? "line-through" : false }}>{item.titre}</li></p>
              <button onClick={() => this.supprimerUnetache(index)}>SUPP</button>
            </>
          )
        })
        }

      </div>
    );
  }
}

export default ToDoLIst;