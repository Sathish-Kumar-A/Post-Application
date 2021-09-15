import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/LoginPage/Login';
import SinglePost from "./Components/SinglePost/SinglePost";
import {BrowserRouter,NavLink,Route,Switch,Redirect} from "react-router-dom"
import Comments from './Components/Comments/Comments';
import Newpost from './Components/NewPost/Newpost';


class App extends React.Component{
  
  render(){
    return (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newpost" component={Newpost} />
        <Route path="/post" component={SinglePost} />
        <Route path="/comments" component={Comments} />
        <Route path="/login" component={Login} />
        <Route path="/home">
          <Redirect path="/" />
        </Route>
      </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
