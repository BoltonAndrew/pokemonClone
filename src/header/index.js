import './index.css';
import NavBar from '../navBar/index';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Header = () => {
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
    return(
      <nav className='heading'>
            <img className='logo' src={logo} alt=''></img>
            <div>
              {headers.map((header, index) => {
                return <NavBar key={index} className={header.className} to={header.to} text={header.text}/>
              })}
            </div>
            <Link className='navLink' id='navURL' to='/'>PokemonTeamBuilder.net</Link>
          </nav>
    )
  }

  export default Header