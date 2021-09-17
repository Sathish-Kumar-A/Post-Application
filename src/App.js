import React from 'react';
import Home from './Components/Home/Home';
import Login from './Components/LoginPage/Login';
import SinglePost from "./Components/SinglePost/SinglePost";
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import Comments from './Components/Comments/Comments';
import Newpost from './Components/NewPost/Newpost';


//Function to route to specific pages according to user present or not
function Authenicate({path:path,component:Component}){
  return (
    <Route
      path={path}
      render={()=>{
        const user=window.localStorage.getItem("userLogin");
        return user && user==="true" ? <Component /> :<Login />
      }}
    />
  );
}

function App (){
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Authenicate path="/newpost" component={Newpost} />
        <Authenicate path="/post" component={SinglePost} />
        <Authenicate path="/comments" component={Comments} />
        <Route path="/login" component={Login} />
        <Route path="/home">
          <Redirect path="/" />
        </Route>
      </Switch>
      </BrowserRouter>
    );
  }
export default App;
