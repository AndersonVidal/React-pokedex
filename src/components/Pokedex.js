import React, { Component } from 'react'
import Pokecard from './Pokecard'
import '../styles/pokedex.css'

class Pokedex extends Component {
  renderPokecard(data) {
    console.log(data)
    return (
      <Pokecard key={data.id}
        name={data.name} 
        id={data.id}
        type={data.type}
        exp={data.base_experience}
      />
    )
  }

  renderPoketitle(winner) {
    if (winner) return <h3 className='Pokewinner'>Winner hand</h3>
    else return <h3 className='Pokeloser'>Loser hand</h3>
  }

  render() {
    return (
      <div className='Pokedex'>
        {this.renderPoketitle(this.props.isWinner)}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className='Pokecards'>
            { this.props.hand.map(data => { return this.renderPokecard(data) }) }
        </div>
      </div>
    )
  }
}

export default Pokedex