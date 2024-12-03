import "./App.css"
import { useState } from "react"
import Startgame from "./components/Startgame"
import Gameplay from "./components/Gameplay"

function App() {
  const [isGameSatarted, setIsGameStarted]=useState(false)

  const toggleGamePlay =()=>{
    setIsGameStarted(prev=>!prev)
  }
  return (
    <>
    {isGameSatarted? <Gameplay/>:<Startgame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App

