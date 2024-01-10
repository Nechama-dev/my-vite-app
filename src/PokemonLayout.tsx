import { Outlet } from 'react-router-dom'

export default function pokemonLayout() {
    return (
        <>
            <div>pokemonLayout</div>
            <div>
                <Outlet></Outlet>
            </div>
        </>
    )
}
