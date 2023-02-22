
import React, { useState, useEffect } from 'react';
import { bringCharacters } from '../../services/apiCalls';
import "./Home.css";


export const Home = () => {

    //Genero un hook donde guardaré los datos que obtendré de la API.

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        if (characters.length === 0) {
            //En caso de no tener aún los personajes...llamaré a la API

            setTimeout(()=>{

                bringCharacters()
                .then(
                    characters => {
                        console.log(characters)

                        setCharacters(characters.data.results);
                    }
                )
                .catch(error => console.log(error))

            },3000)
            
        }

    }, [characters]);

    return (
        <div className='homeDesign'>
            {
                (characters.length > 0)

                    ?

                    (
                        <div>
                            {
                                characters.map(
                                    character => {
                                        return (
                                            <div key={character.id}>{character.name}</div>
                                        )
                                    }
                                )
                            }
                        </div>
                    )

                    :

                    (
                        <div>No ha venido nadie aún.....</div>
                    )

            }
        </div>
    )
}