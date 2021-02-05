//Make sure to import React so you can use it
import React from 'react'


//A component can be just a normal a function that return JSX
const person = (props) => { //Pros are the values that are passed in the Person tag where it is imported
    return (
        //Single curly braces allows you to process data and have dinamic content
        <p>I'm {props.name}! I am {props.age} years old!</p>
    );
}

//Make sure to export the person
export default person;



