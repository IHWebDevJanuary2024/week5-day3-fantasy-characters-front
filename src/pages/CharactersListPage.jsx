import axios from "axios";
import { useEffect, useState } from "react";
import './CharactersListPage.css'

const API_URL = "http://localhost:5000/characters"

function CharactersListPage() {
    const [characters, setCharacters] = useState(null);

    const getAllCharacters = () => {
        axios
            .get(API_URL)
            .then((results) => setCharacters(results.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getAllCharacters()
    }, [])

    // GET the info from our server http://localhost:5000/characters
    return (
        <>
            <h1>Characters list</h1>
            {
                characters ?
                    <ul className="characters-container">
                        {
                            characters.map((character) => {
                                return (
                                    <li className="character-card">
                                        <img src={character.image_url} alt={character.name} />
                                        <div className="character-info">
                                            <h3>{character.name}</h3>
                                            <p>{character.description}</p>
                                            <p>⚔️{character.power}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    :
                    <p>Loading characters...</p>
            }
        </>
    )
}

export default CharactersListPage;