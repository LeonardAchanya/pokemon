import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './List.css';

class List extends Component {
    state = {
        pokemon: [
            // {
            //     id: 1,
            //     name: 'pokemonen1',
            // },
            // {
            //     id: 2,
            //     name: 'pokemonen2',
            // }
        ],
        show: false,
        selectedPoke: null
    }

    componentWillMount() {
        fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
            .then(response => response.json())
            .then(data => {
                let updatedPokes = data.pokemon;
                this.setState({
                    pokemon: updatedPokes
                })
            })
            .catch(err => console.log("Oops Error: " + err))

    }

    showModal(pokemon) {
        this.setState({
            show: true,
            selectedPoke:pokemon
        })
    }

    hideModal = () => {
        this.setState({
            show: false,
            selectedPoke:null
        })
    }
    render() {
        return (
            <>
                {this.state.pokemon.map(pokemon =>
                    <div className="col-md-4 box" key={pokemon.id} onClick={() => this.showModal(pokemon)}>
                         <h1>{pokemon.name}</h1>
                        <img src={pokemon.img} alt="Pokemon"></img>
                    </div>
                )}

                <Modal show={this.state.show} close={this.hideModal} pokemon={this.state.selectedPoke}/>


            </>
        )
    }
}

export default List;