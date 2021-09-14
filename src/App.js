import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/LoginPage/Login';

class App extends React.Component{
  state={
    userList:[],
    user:true
  }
  render(){
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
}
export default App;
