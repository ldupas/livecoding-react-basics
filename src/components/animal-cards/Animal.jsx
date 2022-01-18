import React from 'react';
import { Link } from 'react-router-dom';
import './Animal.css';

function Animal({ animal }) {
    return (
        <div className="Animal">
            <div className="animals-cards">
                <Link to={{ pathname: `/animaux/${animal.id}`}}>
                    <img className="animal-img" src={animal.image} alt={animal.name} />
                </Link>
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