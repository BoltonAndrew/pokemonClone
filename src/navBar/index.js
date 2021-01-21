import './index.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
      <Link className={props.className} to={props.to}>{props.text}</Link>
    )
  }

  export default NavBar