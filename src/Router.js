import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { UserList, UserProfile,Form } from './componunts';
import Dashboard from './componunts/Dashboard';


const Router = () => {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard/>} />
                <Route path="/UserList" element={<UserList/>} />
                <Route  path="/UserProfile" element={<UserProfile/>} />
                <Route  path="/Form" element={<Form/>} />

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router
