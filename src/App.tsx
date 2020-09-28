import React from 'react';
import './App.css';
import RoleList from './RoleList/RoleList';

class App extends React.Component{
  componentDidMount(){
    document.title = "Rolle-kalender"
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <RoleList />
        </header>
      </div>
    );
  }
}

export default App;
