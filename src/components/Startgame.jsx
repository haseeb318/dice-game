import "./Startgame.css"
import styled from "styled-components"
import { Button } from "./styled/Button"

const Startgame=(props)=>{
    return (
        <Container>
            <div>
            <img src="/image/dices.png" alt="" / >
            </div>

            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={props.toggle}>Play Now</Button>
            </div>
        </Container>  
    )
}
export default Startgame

const Container = styled.div`
width: 1182px;
height: 522px;
padding: 100px 129px;
display: flex;
margin: 0 auto;
align-items: center;
.content{
    display: flex;
    flex-direction: column;
    align-items: end;
}
.content h1{
    font-size: 96px;
    white-space: nowrap;  

}

`