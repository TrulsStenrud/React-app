
import './TekledApp.css';
import RoleList from './RoleList/RoleList';
import React from 'react';

class TekledApp extends React.Component{
  componentDidMount(){
    document.title = "Roles"
  }

  render(){
    return (
          <RoleList />
    );
  }
}

export default TekledApp;
