import React, { Component } from 'react'
import Pokecard from './Pokecard'
import pokedata from '../assets/pokedata'
import '../styles/pokedex.css'

class Pokedex extends Component {
  renderPokecard(data) {
    console.log(data)
    return (
      <Pokecard 
        name={data.name} 
        id={data.id}
        type={data.type}
        exp={data.base_experience}
      />
    )
  }

  render() {
    return (
      <div>
        <h1 className='Pokedextitle'>Pokedex</h1>
        <div className='Pokedex'>
            { pokedata.map(data => { return this.renderPokecard(data) }) }
        </div>
      </div>
    )
  }
}

export default Pokedex