// import { useSignal } from '@preact/signals-react';
import { useEffect, useState } from 'react'
import { Pokemon } from './type';
import { Link } from 'react-router-dom';

export default function PokemonList() {
    // const dataSignal = useSignal<Pokemon[]>([])
    const [data, setData] = useState<Pokemon[]>([])
    useEffect(() => {
        const url = 'http://localhost:3000/pokemon';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data)
            });
    }, []);


    return (
        <>
            <div>PokemonList</div>
            {data.map(d => {
                return <Link to={d.name} key={d.id}>{d.name}</Link>
            }
            )}
        </>

    )
}
