import React from 'react'

export default function PokemonAbilities(props: { abilities: any }) {
  return (
    <>
      {props.abilities?.map((abilitie: any, index: number) => {
        return <div key={index}>{abilitie.ability.name}</div>

        
      })}
    </>
  )
}
