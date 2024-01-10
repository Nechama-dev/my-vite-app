import { useParams } from 'react-router-dom'
import Pokemon from './Pokemon';

export default function pokemonWithParam() {
    let {name} = useParams();
  return (
    <>
    <div>pokemonWithParam {name}</div>
    <Pokemon name={name!} healthParam={20}/>
    </>
  )
}
