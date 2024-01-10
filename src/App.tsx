import {  useState } from 'react'
import Pokemon from './Pokemon'
import './App.css'

function App() {
  const [name] = useState<string>("ditto")
  // const [ok, setOk] = useState<boolean>(false)


  return (
    <>

      {/* <input type='text' id="name" onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setOk(true)}>click</button> */}
      {/* {ok && <Pokemon name={name} />} */}
      <Pokemon name={name} healthParam={50}/>
    </>
  )
}

export default App
