//Make sure to import React so you can use it
import React from 'react'
import styled from 'styled-components';

//A component can be just a normal a function that return JSX
const person = (props) => { //Pros are the values that are passed in the Person tag where it is imported
   //{} Curly braces take the data passed in the tag ex: <Person name="x" age="x" />
   //Children represent take the what is passed within the tag ex: <Person> some text </Person>

   //Adding some style by creating a stiled dive with styled packaged
   const StyledDiv = styled.div`
   width: 60%;
   margin: 16px auto;
   border: 1px solid #eee;
   box-shadow: 0 2px 3px #ccc;
   padding: 16px;
   text-align: center;
   
   @media (min-width: 500px){
       width: 450px;
   `

    return (
        <StyledDiv>
            <p onClick={props.clickRefDeletePerson}>I'm {props.name}! I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.refNameChangeHandler} value={props.name}></input>
        </StyledDiv>
    );
}

//Make sure to export the person
export default person;



