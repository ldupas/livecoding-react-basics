import React from 'react';
import './Animal.css';

function Animal({ animal }) {
    return (
        <div className="Animal">
            <div className="animals-cards">
                <img className="animal-img" src={animal.image} alt={animal.name} />
                <div className="animal-desc">
                    <h3>{animal.name}</h3>
                    <span>Espèce: {animal.species}</span>
                    <span>Âge : {animal.age}</span>
                </div>
            </div>
        </div>
    )
}

export default Animal;