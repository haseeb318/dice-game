import styled from "styled-components"
const Rules = () => {
  return (
    <Div>
    <RulesConatiner>
      <h1>How to play dice game</h1>
      <ul>
        <li>Select any number.</li>
        <li>Click on dice image.</li>
        <li>After click on  dice  if selected number is equal to dice number you will get same point as dice. </li>
        <li>If you get wrong guess then  2 point will be dedcuted.</li>
      </ul>
    </RulesConatiner>
    </Div>
  )
}

export default Rules
const Div = styled.div`
    margin-top: 5rem;
`

const RulesConatiner = styled.div`
    width: 50%;
    height: auto;
    background-color: #FBF1F1;
    margin: 2rem auto;
    padding: 3rem;
    ;
    ul{
        margin-top: 8px;
        list-style: none;
       
    }
    ul li {
        padding: 4px;
        font-size: 22px;
        font-weight: 500px;
    }
`
