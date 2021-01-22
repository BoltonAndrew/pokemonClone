import './index.css';
import NavBar from '../navBar/index'

const MidHeader = () => {
    const midHeaders = [
      {to: '/',
       text: 'Home   ⦿',
       className: 'navLink midHeader'},
      {to: '/',
       text: 'National   ⦿',
       className: 'navLink midHeader'},
      {to: '/',
       text: 'Team Planner',
       className: 'navLink midHeader'}];
    return(
      <div className='midHead'>
        {midHeaders.map((midHeader, index) => {
        return <NavBar key={index} className={midHeader.className} to={midHeader.to} text={midHeader.text}/>
        })}
      </div>)
  }

  export default MidHeader;