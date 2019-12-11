import React, { Component } from 'react';
import '../styles/pokecard.css'

const pokeUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends Component {
  makeImgURL(id) {
    let imgId = (id <= 999) ? `00${id}`.slice(-3) : id
    return `${pokeUrl}${imgId}.png`
  }

  render() {
    return (
      <div className='Pokecard'>
        <h2 className='Poketitle'>{this.props.name}</h2>
        <div className='Poke-imagem'>
          <img className='Pokeimg' src={this.makeImgURL(this.props.id)} alt={this.props.name} />
        </div>
        <div className='Pokedata'>
          <div>Type: {this.props.type}</div>
          <div>EXP: {this.props.exp}</div>
        </div>
      </div>
    )
  }
}

export default Pokecard;