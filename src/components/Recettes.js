import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Recettes = () => {

    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        axios
        .get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue)
        .then((response) => setData(response.data.meals));
    }, [inputValue]);

    return (
        <div className="main-container">
            <div className='container-search-bar'>
                <input type="text" placeholder='Rechercher une recette...' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            </div>
            <div className="container-card">
                {
                    data?.map((meals) => (
                            // "meals" correspond à chaque tour de boucle
                            <Card key={meals.idMeal} recette={meals}/>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Recettes;