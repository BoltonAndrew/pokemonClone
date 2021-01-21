import './index.css';

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

  export default TeamDisplay