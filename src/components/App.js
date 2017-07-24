import React, { Component } from 'react';
import NavBar from './NavBar.js';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';
// import "NavBar.js";
// var jobs = require("NavBar.js");
class App extends Component {
  componentWillMount() {

  }
  render() {
    return (

      <div className="App container row">

        <NavBar></NavBar>
        <PlayListForm></PlayListForm>
        <PlayList>

        </PlayList>

      </div>


    );
  }
}

// class NavBar extends Component {
//
// }

// (function() {
// console.log("Jobs", jobs)
// }())

export default App;
