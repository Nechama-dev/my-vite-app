import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Pokemon from './Pokemon.tsx'
import Fight from './Fight.tsx'
import PokemonWithParam from './pokemonWithParam.tsx'
// import PokemonLayout from './PokemonLayout.tsx'
import PokemonLayout from './PokemonLayout.tsx'
// import NestedMain from './nestedMain.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PokemonList from './PokemonList.tsx'


const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <h3>not found</h3>
    ),
  },
  {
    path: "/pokemon",
    element: (
      <Pokemon name={"ditto"} healthParam={50}/>
    ),
  },
  {
    path: "/pokemon/:name",
    element: (
      <PokemonWithParam />
    ),
  },
  {
    path: "/pokemon/ability",
    element: <div>ability</div>,
  },
  {
    path: "/pokemon/fight",
    element: <Fight />,
  },
  {
    path: "/pokemonLayout",
    element: <PokemonLayout />,
    children: [
      {
        path: "",
        element: (
          <PokemonList />
        ),
      },
      {
        path: ":name",
        element: (
          <PokemonWithParam />
        ),
      },
      {
        path: "*",
        element: (
          <>not found</>
        ),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
