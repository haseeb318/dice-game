import TotalScore from "./TotalScore"
import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import {useState} from "react"
import { Button ,OutlineButton} from "./styled/Button"
import Rules from "./Rules"
const Gameplay =()=>{


    const [selectedNumber , setSelectedNumber] = useState()
    const [currentState, setCurrentState]= useState(1)
    const [score , setScore] = useState(0)
    const [error , setError] = useState("")
    const [showRules , setShowRules]= useState(false)

    const generateRandomNumber =(max,min)=>{
        console.log("Clicked")
        console.group(Math.floor(Math.random() *(max -min )+min))
       return Math.floor(Math.random() *(max -min )+min)
   }

   const roleDice =()=>{
       if (!selectedNumber){
        setError("You have not selected any number")
        return
       }
       const randNumber = generateRandomNumber(1,7)
       setCurrentState((prev)=> randNumber)
       if (randNumber === selectedNumber){
          setScore(prev => prev + randNumber)
       }
       else{
        setScore(prev => prev - 2) 
       }
       setSelectedNumber(undefined)
   }

   const resetScore=()=>[
    setScore(0)
   ]

   const showRulesHandler =()=>{

    setShowRules(pre => !showRules)

   }



    return(
        <MainContainer>
          <div className="top-Section">
           <TotalScore score ={score}/>
           <NumberSelector
            setError ={setError}
            error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}/>
           </div>
           <RollDice currentState={currentState} roleDice={roleDice}></RollDice>
           <div className="btn">
            <OutlineButton
            onClick={resetScore}
            >Reset Score</OutlineButton>
            <Button onClick={showRulesHandler}>Show Rules</Button>
           </div>
            {showRules?<Rules />:""}
        </MainContainer>
    )
}
export default Gameplay


const MainContainer = styled.main`
padding-top: 3rem ;
.top-Section{
    display: flex;
    justify-content: space-around;
    align-items: center;
}  
.btn{
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    margin-top: 12px;

} 
`