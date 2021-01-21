import './index.css';

const TinyPoki = (props) => {
    return(
      <button type='submit' className='circleNames' onClick={props.onClick}>
        <img src={props.sprite} alt=''></img>
      </button>
    )
}

export default TinyPoki