//Make sure to import React so you can use it
import React from 'react'
import './Person.css';//import the css file
//Import Radium a package to use inline css style such as hover and media queries
import Radium from 'radium';

//A component can be just a normal a function that return JSX
const person = (props) => { //Pros are the values that are passed in the Person tag where it is imported
   //{} Curly braces take the data passed in the tag ex: <Person name="x" age="x" />
   //Children represent take the what is passed within the tag ex: <Person> some text </Person>
    return (
        <div className="Person">
        <p onClick={props.clickRefDeletePerson}>I'm {props.name}! I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.refNameChangeHandler} value={props.name}></input>
        </div>
    );
}

//Make sure to export the person
export default Radium(person);



