
import styled from "styled-components"
const RollDice = ({currentState, roleDice}) => {
    

  return (
     <DiceContainer>
        <div className="dice"
        onClick={roleDice}>
        <img src={`/image/dice/dice_${currentState}.png`}/>
        </div>
        <p>Click on Dice</p>
     </DiceContainer>
  )
}

export default RollDice


const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  p{
    font-size: 24px;
  }
  .dice{
    cursor: pointer;
  }
    
`