import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Header} from './components/Header'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Signup} from './pages/Signup'
import {Routes,Route} from 'react-router-dom'


import { Client, Account, Databases } from 'appwrite';

function App() {

  const client = new Client()
  client.setProject('64645db2622965d36e51')
  client.setEndpoint('https://cloud.appwrite.io/v1')

  const account = new Account(client)
  const database = new Database( client )

  return (
    <>
    <AuthContext.Provider value={ account }>
      <Header text="Wine Company" />
      <Routes>
        <Route path='/' element={ <Home db={database} /> } />
        <Route path="/about" element={ <About/> } />
        <Route path='/register' element={ <Signup/> } />
      </Routes>
      </AuthContext.Provider>
      
    </>
  )
}

export default App
