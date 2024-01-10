import { useEffect, useState } from 'react'

import './App.css'
import PokemonAbilities from './PokemonAbilities'

function Pokemon(props: { name: string, healthParam: number, fatedName?: () => void }) {
  const [pokes, setPokes] = useState<any>()
  const [health, setHealth] = useState<number>(props.healthParam)
  const [error, setError] = useState<boolean>(false)
  //   const [name, setName] = useState<string>("ditto")

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`).then(async res => {
      if (res.status == 200) {
        const json = await res.json()
        setPokes(json)
        console.log(json);
      } else {
        setError(true)
      }

    })
  }, [])

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  if(error) return <div>Error!!!</div>
  if (health <= 0) {
    props.fatedName?.()
    return <div>fated {pokes?.name}</div>
  }

  return (
    <>
      {/* <input type='text' id="name" onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => }>click</button> */}
      {pokes &&
        <>
          <h1>{pokes.name}</h1>
          <h2>{pokes.height}</h2>
          <h3>{pokes.weight}</h3>
          <h4>{pokes.abilities?.length}</h4>
          <PokemonAbilities abilities={pokes.abilities} />
          <h4>{health}</h4>
          <button onClick={() => setHealth((health) => health + 10)}>up</button>
          <button onClick={() => setHealth((health) => health - randomNumberInRange(1, 10))}>down</button>
        </>
      }
    </>
  )
}

export default Pokemon
