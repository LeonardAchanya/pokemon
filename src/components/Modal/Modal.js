import React from 'react';
import './Modal.css';

// const Modal = ({ close, show }) => {
const Modal = (props) => {
    // console.log(props.pokemon);
    if (props.pokemon === null){
        return(
            <>
            </>
        )
    }else{

    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h1>Name: {props.pokemon.name} </h1>
                <img src={props.pokemon.img} alt="The Pokemon"/>
                <p>Height: {props.pokemon.height}</p>
                <p>Weight: {props.pokemon.weight}</p>
                <p>Weaknesses: {props.pokemon.weaknesses+","}</p>
            <button onClick={props.close}>close</button>
            </section>
        </div>
            );
        };
    }

        
export default Modal;