import React, { Component } from 'react';
import HeaderNavbar from './header/header';
import HousesPageData from './pages/houses-page';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <HeaderNavbar />
      <div style={{'paddingTop':'65px'}}>
        <HousesPageData />
      </div>
      </div>
      );
  }

} 

export default App;
