import styled from "styled-components"
const NumberSelector = ({selectedNumber , setSelectedNumber,error,setError}) => {

  const numArray =[1,2,3,4,5,6]
  console.log("Selected Number",selectedNumber)

  const numberSelctorHandler =(value)=>{
    setSelectedNumber(value)
    setError("")

  }

  return (

    <NumberContainer>
    <p className="error">{error}</p>
    <div className="flex">
     {numArray.map((value, index)=>(
      <Box key={index}
    
      isselected={value===selectedNumber}
      onClick={()=>numberSelctorHandler(value)}>
            {value}
        </Box>
     ))}
    </div>
    <p>Select Number</p>
    </NumberContainer>
  )
}

export default NumberSelector;



const NumberContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
gap:10px;

.flex{
    display: flex;
    gap: 24px;
}

p{
    font-size: 24px;
    font-weight: 700;
}
.error{
  font-size: 24px;
  color: red;
}
    
`
const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props)=> props.isselected?"black":"white"};
  color: ${(props)=> props.isselected?"white":"black"};
  &:hover{
    cursor: pointer;
  }
    
`
