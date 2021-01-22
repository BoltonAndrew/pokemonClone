import './index.css';

const TeamDisplay = (props) => {
    return(
      <div className='indyPoki'>
        <div className='pokiCircle'>
          <img className='pokiImage' src={props.sprite} alt=''></img>
        </div>
        <div className='textBox'>
          <div>
            <p className='pokiName'>{props.name}</p>
          </div>
          <div>
            <img className='type' src={props.type1.default} alt=''></img>
            <img className='type' src={props.type2.default} alt=''></img>
          </div>
        </div>
      </div>
    )
  }

  export default TeamDisplay