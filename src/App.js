import React, {Component} from 'react';
//import React from 'react';
//import logo from './logo.svg';

import Counter from './components/counter_example/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css';

class App extends Component{
  render () {
    return (
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp/>
      </div> 
    );
  }
}

export default App;
