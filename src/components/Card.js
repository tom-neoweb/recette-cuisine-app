import React from 'react';

const Card = ({ recette }) => {
    // On peut également faire props.recette
    return (
        <div className='card'>
            <h2>{recette.strMeal}</h2>
            <p><strong>Origine :</strong> {recette.strArea}</p>
            <img src={recette.strMealThumb} alt={"photos" + recette.strMeal} />
            <a href={recette.strSource}>Source</a>
        </div>
    );
};

export default Card;