import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './comp/Nav.jsx'
import Home from './comp/Home.jsx'
import Login from './comp/Login.jsx'
import Reg from './comp/Reg.jsx'
import Km from './comp/Km.jsx'  
import Cart from './comp/Cart.jsx'
import Logout from './comp/Logout.jsx'
import Addprod from './comp/Addprod.jsx'
import Edit from './comp/Edit.jsx'
import Ct from './comp/Ct.jsx'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import "./App.css"
const App = () => {
    let [state,setState]=useState({"token":"",uid:"","name":"","role":""})
    let updstate=(obj)=>{
        setState({...state,...obj})
    }
    useEffect(()=>{
        let t=Cookies.get("logininfo")
        if(t!=undefined)
        {
            let info=JSON.parse(t)
            updstate(info)
        }
    },[])
        
    let obj={"state":state,"updstate":updstate}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reg' element={<Reg />} />
        <Route path='/km/:id' element={<Km/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/addprod" element={<Addprod/>} />
        <Route path="/updprod/:id" element={<Edit/>} />

      </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App