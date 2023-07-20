import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/public/Footer'
import Navbar from './components/public/Navbar'
import Main from './components/public/Main';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import { Detail } from './components/public/Detail'
import UserForm from './components/public/UserForm'


function App() {
 

  return (
    <>
     <div>
    
    
    <Navbar />

<Routes>
  <Route path="/" element={<Main/>}/>
    <Route exact path="/detail/:id" element={<Detail />}></Route>
  <Route path="/user-form" element ={<UserForm />}/>
</Routes>

<Footer />
     </div>
    </>
  )
}

export default App
