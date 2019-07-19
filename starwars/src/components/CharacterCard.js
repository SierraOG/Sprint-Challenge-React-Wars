import React from 'react'

function CharacterCard({character}){
    return(
        <div>
            <h1>{character.name}</h1>
            <p>{character.skin_color}</p>
        </div>
    )
}

export default CharacterCard