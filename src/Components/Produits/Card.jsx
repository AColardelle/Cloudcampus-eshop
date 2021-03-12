import React from 'react'

import './card.scss'

const Card = ({produit, setCartUpdate, cartUpdate}) => {

    const updatecard = () => {
        console.log('ca fonctione bg');
        setCartUpdate(
            [...cartUpdate, {
                titre: produit.titre,
                prix: produit.prix,
            }]
        )
    }

    return (
        <div className="card">
            <div className="illu">
                <img src={produit.img} alt=""/>
            </div>

            <div className="text">
                <h1 >{produit.titre}</h1>
                <p>{produit.descriptionCourte}</p>
                <h2>{produit.prix} €</h2>
            </div>

            <div onClick={updatecard} className="buttonAddBox">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M472 452c0 11-9 20-20 20h-20v20a20 20 0 11-40 0v-20h-20a20 20 0 110-40h20v-20a20 20 0 1140 0v20h20c11 0 20 9 20 20zm0-312v192a20 20 0 11-40 0V160h-40v60a20 20 0 11-40 0v-60H160v60a20 20 0 11-40 0v-60H80v312h212a20 20 0 110 40H60c-11 0-20-9-20-20V140c0-11 9-20 20-20h61a136 136 0 01270 0h61c11 0 20 9 20 20zm-121-20a96 96 0 00-190 0z"/>
                </svg>
            </div>

            {/* {produit.titre} */}
        </div>
    )
}

export default Card
