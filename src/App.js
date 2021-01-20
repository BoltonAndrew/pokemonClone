import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './assets/logo1.png';
import pokiLogo from './assets/pokemonLogo.png';
import './App.css';

const App = () => {
  //states//
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
     className: 'navLink midHeader'}]

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


export default App;