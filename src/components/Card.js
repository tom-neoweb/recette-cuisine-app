import React from 'react';

const Card = ({ recette }) => {
    return (
        <div className='card'>
            <h2>{recette.strMeal}</h2>
            <p><strong>Origine :</strong> {recette.strArea}</p>
            <img src={recette.strMealThumb} alt={recette.strMeal} />
            <a href={recette.strSource} target="_blank">Source</a>
        </div>
    );
};

export default Card;