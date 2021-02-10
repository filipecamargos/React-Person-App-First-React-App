//React to allows to render and Componenet to allow creat components 
import React, { Component } from 'react';
import './App.css';
//User upercase for the your elements components beacause the lower are default for the HTML
import Person from './Person/Person' //inport from Person the function person

//Create a class APP
class App extends Component {

  //use state to determin properties
  state = {
    persons: [
      { name:"Bob", age:"30"},
      { name:"Luke", age:"33"},
      { name:"Mark", age:"37"},
    ],
  }
  
  //method that uses setState store as a veriable JS new sintex if this was
  //If this was a method it would have to be called as function and would be executed right way
  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name:newName, age:"30"},
        { name:"Luke Hoge", age:"33"},
        { name:"Mark Douth", age:"40"},
      ],
    })
  }

  //Method to change name
  nameChangeHandler = (event) => {
    this.setState({ 
      persons: [
        { name:event.target.value, age:"30"},
        { name:"Luke Hoge", age:"33"},
        { name:"Mark Douth", age:"40"},
      ],
    })
  }


  //What is render in the page
  //Methods can be passed to method as a reference to it a parent componet like refSwitchNameHandler
  //To pass paraments to methods uses switchNameHandler.bind(this, value) or wit arrow function that will not get executed
  //automaticlly like () => this.switchNameHandler(value) - It can be a little slower
  render() {

    //Can style in here
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer"
    }

    return (
      <div className ="App">
        <h1> Hi this is my first React App </h1>
        <button
          onClick={ () => this.switchNameHandler("Bruno Covas")}
          style={style}
          >
            Switch Name
        </button>
        <a href="#" >
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          refSwitchNameHandler={this.switchNameHandler.bind(this, "Marcus Broke")}
          refNameChangeHandler={this.nameChangeHandler.bind()}
        /></a>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          >
            I like to code!
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />
      </div>
    ) };
}



//Export the class as default 
export default App;



/*###################################################################
Everything below was done in as state hooks which we converted back
into class based 

import React, { useState} from 'react'; //Converted to hooks

//This is a react component
//Every react component render (HTML -> (EJX)) to the DOM
const app = props =>  {  //class App extends Component got converted into rooks

  //Call state to use it it will return an array with two elements
  const [personState, setPersonState] = useState({  
    //state only avaliable in a class where it extends Componets obs: There are hooks
    //States allow to use data in this case you can store things that you need to manipulate in this class
    //When state changes it leads React to update the DOM
    //state = {
    persons: [
        { name:"Bob", age:"30"},
        { name:"Luke", age:"33"},
        { name:"Mark", age:"37"},
      ],
    //}
  })

  //The onClick button will handle this funtion that change the names
  const switchNameHandler = () => {
    //Don't Change state directly: this.state.persons[0].name = "Bob Marley";
    //Setters allows you to overide the other state
    setPersonState({ //Set states will always overwrite the older state, so you have to make sure to copy the older stuff
      persons: [
      { name:"Bob Marley", age:"50"},
      { name:"Luke", age:"33"},
      { name:"Mark", age:"40"},
    ]}
    )
  }; 
  
  //Note: you can have multiples uses states so you can manager it ex:
  // const [addressState, setAdressState] = useState ('Some Dress')

  return (
    <div className ="App">
      <h1> Hi this is my first React App </h1>
      <button onClick={switchNameHandler}>Switch Name</button>
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
*/