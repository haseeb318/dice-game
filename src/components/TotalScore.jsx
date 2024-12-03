import styled from "styled-components"
const TotalScore =({score})=>{
    return(
        <ScoreConatainer>
          <h1>{score}</h1>
        <p>Total Score</p>
        </ScoreConatainer>
    )
}
export default TotalScore


const ScoreConatainer = styled.div`
 max-width: 200px;
 text-align: center;
 /* background-color: red; */
 margin: 0;
 padding: 0;
 h1{
    font-size: 100px;
    line-height: 100px;
    margin: 0;
    padding: 0;

 }
 p{
    font-size:24px;
    font-weight: 500px;
    margin: 0;
    padding: 0;
 }
    
`