//React to allows to render and Componenet to allow creat components
import React, { Component } from 'react';
import './App.css';
//User upercase for the your elements components beacause the lower are default for the HTML
import Person from './Person/Person' //inport from Person the function person

//This is a react component
//Every react component render (HTML -> (EJX)) to the DOM
class App extends Component {
    render() {
        return (
          <div className ="App">
            <h1> Hi this is my first React App </h1>
            <Person name="Bob" age="30" />
            <Person name="Luke" age="33" >I like to code</Person>
            <Person name="Mark" age="37" />
          </div>
        );
        
        //This is what JSX gets compiled to -> Create takes three element, JS object for class or id and text
       // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m React APP!!!'));
    }
}

//Export the class as default 
export default App;