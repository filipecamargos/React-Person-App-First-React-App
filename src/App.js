//React to allows to render and Componenet to allow creat components 
import React, { Component } from 'react';
import { css } from 'styled-components';
import cssClasses from './App.css';
//User upercase for the your elements components beacause the lower are default for the HTML
import Person from './Person/Person'; //inport from Person the function person
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

//Create a class APP
class App extends Component {

  //use state to determin properties
  state = {
    persons: [
      {id:"1", name:"Bob", age:"30"},
      {id:"2", name:"Luke", age:"33"},
      {id:"3", name:"Mark", age:"37"},
    ],
    showPerson: false
  }
  
  //Delete method to delete person
  deletePersonHandler = (personIndex) => { 

    //const persons = this.state.persons.slice();  Array are reference type you can use slice
    //or the E6 feture the spread operator
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1); 

    this.setState({persons: persons})

  }

  //Method to change name
  nameChangeHandler = (event, id) => {

    //findIndex will go through each element in the persons array
    //then return true if that element.id == id required
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    //Use the object spred operator since array is reference type
    //The object assigned could be used here Object.assign({}, this.state.person[personIndex])
    const person = {
      ...this.state.persons[personIndex]
    }

    //Change the name of person object by getting the event
    person.name = event.target.value;
    
    //creat a reference to the persons array in state
    const persons = [...this.state.persons];
    //Update the person with the new information
    persons[personIndex] = person; 
    
    //Set the state
    this.setState({
      persons : persons
    })
  }

  //toggle method
  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  //What is render in the page
  //Methods can be passed to method as a reference to it a parent componet like refSwitchNameHandler
  //To pass paraments to methods uses switchNameHandler.bind(this, value) or wit arrow function that will not get executed
  //automaticlly like () => this.switchNameHandler(value) - It can be a little slower
  render() { //Everytimes render is called you code will ran

    //btn text and style
    var btntext = "Show Names";
    let btnClass = "";


    //Variable are allowed to be created inside render
    let persons  = null;

    //if show person is true we will assign the jsx to it
    if (this.state.showPerson) {
      //variables can hold jsx code 
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                    <Person 
                        clickRefDeletePerson={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        refNameChangeHandler={(event) => this.nameChangeHandler(event, person.id)}
                      />
                    </ErrorBoundary>
            })
          }
        </div>
      )

      //Change btn name and style
      btntext = "Hide Names";
      btnClass = cssClasses.Red;
    }

    //Change style dynamically
    let classesNames = [];

    if (this.state.persons.length <= 2) {
      classesNames.push(cssClasses.red);
    }

    if(this.state.persons.length <= 1) {
      classesNames.push(cssClasses.bold);
    }


    return (
        <div className ={cssClasses.App}>
        <h1> Hi this is my first React App </h1>
        <p className={classesNames.join(' ')}>Remember React is just JavaScript</p>
        <button className={btnClass} condition={this.state.showPerson} onClick={this.toggleNameHandler}>
           {btntext}
        </button>
        {persons}
      </div>
    ) };
}



//Export the class as default 
export default App; //Hiher order component. The Radium will add the syntex to use inline style



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