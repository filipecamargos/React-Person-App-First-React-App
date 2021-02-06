//React to allows to render and Componenet to allow creat components 
//import React, { Component } from 'react';
import React, { useState} from 'react'; //Converted to hooks
import './App.css';
//User upercase for the your elements components beacause the lower are default for the HTML
import Person from './Person/Person' //inport from Person the function person

//This is a react component
//Every react component render (HTML -> (EJX)) to the DOM
const app = props =>  {  //class App extends Component got converted into rooks

  //Call state to use it it will return an array with two elements
  const [personState, setPerson] = useState({  
    //state only avaliable in a class where it extends Componets obs: There are hooks
    //States allow to use data in this case you can store things that you need to manipulate in this class
    //When state changes it leads React to update the DOM
    state = {
      persons: [
        { name:"Bob", age:"30"},
        { name:"Luke", age:"33"},
        { name:"Mark", age:"37"},
      ],
    }
  })

  return (
    <div className ="App">
      <h1> Hi this is my first React App </h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age}
      />
      <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}>
          I like to code!
      </Person>
      <Person 
        name={personState.persons[2].name} 
        age={personState.persons[2].age} 
      />
    </div>
  );
        
  //This is what JSX gets compiled to -> Create takes three element, JS object for class or id and text
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React APP!!!'));

}

//Export the class as default 
export default app;



        //The onClick button will handle this funtion that change the names
        switchNameHandler = () => {
          //Don't Change state directly: this.state.persons[0].name = "Bob Marley";
          //Setters allows you to overide the other state
          this.setState({
            persons: [
            { name:"Bob Marley", age:"50"},
            { name:"Luke", age:"33"},
            { name:"Mark", age:"40"},
          ]}
          )
        };