import React from 'react'
import Home from './Components/Home';
import Login from './Components/Login';
import New from './Components/New';
// import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import PageNotFound from './Components/PageNotFound';
// import Routing from './Routing';
// npm uninstall react-router-dom
// npm i react-router-dom@5.3.1
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  
  
    return (
        <>
            {/* <div>``````````````````````````````````````````````````````</div>
        <div>App</div> */}
            <NavBar></NavBar>
            <Routes>
                <Route exact path='/' element={<Navigate  to={'/home'}/>} />
                <Route path="/home" element={<Home/>} />
                
                <Route path="/login" element={<Login/>}/>
     
                <Route path="/new" element={<New/>} />

                {/* <Redirect from="/"  exact to="/home" >
                </Redirect> */}
                <Route element={<PageNotFound></PageNotFound>}/>
            </Routes>
            {/* <div>``````````````````````````````````````````````````````</div> */}
        </>
        // <Routing></Routing>
    )
}

export default App;