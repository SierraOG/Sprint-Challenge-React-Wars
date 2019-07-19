import React, {useState, useEffect} from 'react'
// import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import axios from "axios";

const Card = styled.div`
  background-color: lightgray;
  text-shadow: 1px 1px 5px #fff;
  width: 300px;
  height: 300px;
  margin: 20px 50px;
  border-radius: 15px;
`

const Name = styled.h1`
    width: 90%;
    margin: 10px auto;
    border-bottom: 1.5px dashed grey;
`
const SubTitle = styled.p`
    color: dimgrey;
`

function CharacterCard({character}) {
    const [hometown, setHometown] = useState(character.homeworld)
    const [starships, setStarships] = useState('')
    const starshipsArray = character.starships
    useEffect(() =>{
        axios.get(hometown)
        .then( data => {
          setHometown(data.data.name)
        })
        .catch(error=>{
          console.log('error')
        })
        starshipsArray.forEach((ship) => {
            axios.get(ship)
            .then( data => {
                setStarships(data.data.name)
            })
            .catch(error => {console.log('error')})
        })
    }, [])
    return(
    <Card>
        <Name>{character.name}</Name>
        <SubTitle>{hometown}</SubTitle>
        <p>Description: </p>
        <p>Skin color: {character.skin_color}</p>
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
        <p>{starships !== '' ? `Starships: ${starships}` : ''}</p>
    </Card>
    )
}
  
  export default CharacterCard
  