import './index.css';

const TPlanner = (props) => {
    return(
      <div className={props.className}>
        <h2 id={props.id}>{props.text}</h2>
      </div>
    )
  }

  export default TPlanner