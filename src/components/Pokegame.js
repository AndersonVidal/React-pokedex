import React, { Component } from 'react';
import Pokedex from './Pokedex'
import pokedata from '../assets/pokedata'

class Pokegame extends Component {
  render() {
    let hand1 = []
    let hand2 = [...pokedata]
    while (hand1.length < hand2.length) {
      let randomIDx = Math.floor(Math.random() * hand2.length);
      let card = hand2.splice(randomIDx, 1)[0]
      hand1.push(card);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

    return (
      <div>
        <Pokedex hand={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        <Pokedex hand={hand2} exp={exp2} isWinner={exp2 > exp1}/>
      </div>
    )
  }
}

export default Pokegame