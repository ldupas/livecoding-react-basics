import React from 'react';
import './Animal.css';

const Animal = ({ name, species, age, image }) => {
    return (
        <div className='Animal'>
            <div className='animal-cards'>
                <img className='animal-img' src={image} alt={name} />
                <div className='animal-desc'>
                    <h3>{name}</h3>
                    <span>Espèce : {species}</span>
                    <span>Âge : {age}</span>
                </div>
            </div>            
        </div>
    )
}

export default Animal;
