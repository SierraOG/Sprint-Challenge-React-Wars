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
    margin: auto;
    border-bottom: 1.5px dashed grey;
`

function CharacterCard({character}) {
    const [hometown, setHometown] = useState(character.homeworld)
    useEffect(() =>{
        axios.get(hometown)
        .then( data => {
          setHometown(data.data.name)
        })
        .catch(error=>{
          console.log('error')
        })
    }, [])
    return(
    <Card>
        <Name>{character.name}</Name>
        <p>Home planet: {hometown}</p>
        <p>Description: </p>
        <p>Skin color: {character.skin_color}</p>
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
    </Card>
    )
}
  
  export default CharacterCard
  