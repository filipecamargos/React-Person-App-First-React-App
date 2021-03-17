//Make sure to import React so you can use it
import React from 'react'
//Import CSS using CSS Modules
import cssClasses from './Person.css'

//Creat  Person Component that takes props
const person = (props) => { 
    //Playing with Error Message
    const rnd = Math.random();

    if (rnd > 0.07) {
        throw new Error('Something Wrong');
    }
    
    return (
        <div className={cssClasses.Person}>
            <p onClick={props.clickRefDeletePerson}>I'm {props.name}! I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.refNameChangeHandler} value={props.name}></input>
        </div>
    );
}

//Make sure to export the person
export default person;



