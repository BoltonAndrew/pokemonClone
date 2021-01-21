import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CurrentTeam from './currentTeam/index'
import Header from './header/index'
import MidHeader from './midHeader/index'
import Options from './options/index'
import TPlanner from './teamPlanner/index'
import './App.css';

const App = () => {
  //states//
  const [clickPoki, setClickPoki] = useState();
  const [teamNum, setTeamNum] = useState(-1);
  const [pokemons, setPokemon] = useState([
    {name: '???',
     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
     type1: '',
     type2: ''},
     {name: '???',
     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
     type1: '',
     type2: ''},
     {name: '???',
     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
     type1: '',
     type2: ''},
     {name: '???',
     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
     type1: '',
     type2: ''},
     {name: '???',
     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
     type1: '',
     type2: ''},
     {name: '???',
     sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
     type1: '',
     type2: ''}]);
  //functions//
  const handleSubmit = async (e) => {
    if (teamNum < 6) {
      e.preventDefault();
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${clickPoki}`)
      let data = await res.json();
      let floatArr = [...pokemons];
      floatArr[teamNum].name = data.forms[0].name;
      floatArr[teamNum].sprite = data.sprites.front_default;
      floatArr[teamNum].type1 = require(`./assets/${data.types[0].type.name}.png`);
      if (data.types[1]) {
        floatArr[teamNum].type2 = require(`./assets/${data.types[1].type.name}.png`);
      }
      setPokemon(floatArr);
    }
  }

  return (
    <Router>
      <div>
        <Header/>
        <TPlanner className='bannerTitle' id='bannerTitleh2' text='TEAM PLANNER'/>
        <MidHeader/>
        <TPlanner className='midTitle' id='midTitleh2' text='Team Planner'/>
        <CurrentTeam pokemons={pokemons}/>
        <Options handleSubmit={handleSubmit} setClickPoki={setClickPoki} setTeamNum={setTeamNum} teamNum={teamNum}/>
      </div>
    </Router>
  );
}

export default App;