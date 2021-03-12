import React from 'react'

import LigneProduits from '../Components/LigneProduits/LigneProduits'

import './index.scss'

const Index = ({produits, setCartUpdate,cartUpdate}) => {
    return (
        <section className="presentationProduit">

            <LigneProduits produits={produits} setCartUpdate={setCartUpdate} cartUpdate={cartUpdate} titre="Sacs à main" categorie="sacamain" />

            <div style={{marginTop:'40px'}}>
                <LigneProduits produits={produits} setCartUpdate={setCartUpdate} cartUpdate={cartUpdate} titre="Bagues" categorie="bague" />
            </div>
            
            <div style={{marginTop:'40px'}}>
                <LigneProduits produits={produits} setCartUpdate={setCartUpdate} cartUpdate={cartUpdate} titre="Chaussures" categorie="chaussures" />
            </div>
        
        </section>
    )
}

export default Index
