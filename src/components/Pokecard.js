import React, { Component } from 'react';
import '../styles/pokecard.css'

const pokeUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends Component {
  makeimgId(id) {
    let imgStr = ''
    if (id < 100) imgStr = (id < 10) ? '00' : '0'
    return imgStr + id + '.png'
  }

  render() {
    return (
      <div className='Pokecard'>
        <h3 className='Poketitle'>{this.props.name}</h3>
        <img className='Pokeimg' src={pokeUrl + this.makeimgId(this.props.id)} alt="" />
        <div>
          <p>Type: {this.props.type} <br/> EXP: {this.props.exp} </p>
        </div>
      </div>
    )
  }
}

export default Pokecard;