import React, {useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import styled from 'styled-components';

// components
import CharacterCard from './components/CharacterCard'

// style App div
const AppContainer = styled('div')`
  &&&{
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-image: url('./sw-bg.jpg') !important;
    background-size: cover;
  }
`;

const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`

const CharBox = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])

  useEffect(() =>{
    axios.get(`https://swapi.co/api/people/`)
    .then( data => {
      console.log(data.data.results)
      // characters is now set to an array of objects of characters
      setCharacters(data.data.results)
    })
    .catch(error=>{
      console.log('error')
    })
  }, [])
  console.log( characters)
  return (
    <AppContainer>
      <Header>React Wars</Header>
      <CharBox>
        {characters.map(character => <CharacterCard character = {character}/>)}
      </CharBox>
    </AppContainer>
  );
}

export default App;
