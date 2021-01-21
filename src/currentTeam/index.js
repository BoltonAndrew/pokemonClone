import TeamDisplay from '../teamDisplay/index';
import './index.css';

const CurrentTeam = (props) => {
    return(
      <>
        <h2 className='yourTeam'>Your Team</h2>
        <div className='yourTeamDisplay'>
          {props.pokemons.map((pokemon, index) => {
            return <TeamDisplay key={index} name={pokemon.name} sprite={pokemon.sprite} type1={pokemon.type1} type2={pokemon.type2}/>
          })}
        </div>
      </>
    )
  }

  export default CurrentTeam