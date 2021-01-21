import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './assets/logo1.png';
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
  //constants//
  const headers = [
    {to: '/',
     text: 'Home',
     className: 'navLink topHeader'},
    {to: '/NatDex',
     text: 'National Dex',
     className: 'navLink topHeader'},
    {to: '/KalDex',
     text: 'Kalos Dex',
     className: 'navLink topHeader'},
    {to: '/OAloDex',
     text: 'Old Alola Dex',
     className: 'navLink topHeader'},
    {to: '/NAloDex',
     text: 'New Alola Dex',
     className: 'navLink topHeader'},
    {to: '/TypeCalc',
     text: 'Type Calculator',
     className: 'navLink topHeader'}];

  const midHeaders = [
    {to: '/',
     text: 'Home',
     className: 'navLink midHeader'},
    {to: '/',
     text: 'National',
     className: 'navLink midHeader'},
    {to: '/',
     text: 'Team Planner',
     className: 'navLink midHeader'}];

  const sprites = [ "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", 
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"];
  //functions//
  const handleSubmit = async (e) => {
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


  return (
    <Router>
      <div>
        <nav className='heading'>
          <img className='logo' src={logo} alt=''></img>
          {headers.map((header, index) => {
            return <NavBar key={index} className={header.className} to={header.to} text={header.text}/>
          })}
          <Link className='navLink' id='navURL' to='/'>PokemonTeamBuilder.net</Link>
        </nav>
        <TPlanner className='bannerTitle' id='bannerTitleh2' text='TEAM PLANNER'/>
        {midHeaders.map((midHeader, index) => {
            return <NavBar key={index} className={midHeader.className} to={midHeader.to} text={midHeader.text}/>
          })}
        <TPlanner className='midTitle' id='midTitleh2' text='Team Planner'/>
        <h2 className='yourTeam'>Your Team</h2>
        <div className='yourTeamDisplay'>
          {pokemons.map((pokemon, index) => {
            return <TeamDisplay key={index} name={pokemon.name} sprite={pokemon.sprite} type1={pokemon.type1} type2={pokemon.type2}/>
          })}
        </div>
        <h2 className='yourOptions'>Your Options</h2>
        <form className='pokiBoard' onSubmit={handleSubmit}>
          {sprites.map((poki, index) => {
            return <TinyPoki key={index} sprite={poki} onClick={() => {setClickPoki(index+1); setTeamNum(teamNum + 1)}}/>
          })}
          </form>
      </div>
    </Router>
  );
}

const NavBar = (props) => {
  return(
    <Link className={props.className} to={props.to}>{props.text}</Link>
  )
}

const TPlanner = (props) => {
  return(
    <div className={props.className}>
      <h2 id={props.id}>{props.text}</h2>
    </div>
  )
}

const TeamDisplay = (props) => {
  return(
    <div className='indyPoki'>
      <div className='pokiCircle'>
        <img src={props.sprite} alt=''></img>
      </div>
      <div>
        <div>
          <p className='pokiName'>{props.name}</p>
        </div>
        <div>
          <img src={props.type1.default} alt=''></img>
          <img src={props.type2.default} alt=''></img>
        </div>
      </div>
    </div>
  )
}

const TinyPoki = (props) => {
  return(
    <button type='submit' className='circleNames' onClick={props.onClick}>
      <img src={props.sprite} alt=''></img>
    </button>
  )
}

export default App;