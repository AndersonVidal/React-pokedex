import React, { Component } from 'react';
import '../styles/pokecard.css'

const pokeUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends Component {
  makeImgURL(id) {
    let imgStr = (id <= 999) ? `00${id}`.slice(-3) : id
    return `${pokeUrl}${imgStr}.png`
  }

  render() {
    return (
      <div className='Pokecard'>
        <h2 className='Poketitle'>{this.props.name}</h2>
        <img className='Pokeimg' src={this.makeImgURL(this.props.id)} alt={this.props.name} />
        <div className='Pokedata'>Type: {this.props.type}</div>
        <div className='Pokedata'>EXP: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;