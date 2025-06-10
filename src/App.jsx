import { useState } from 'react'
import './App.css'
import MainPage from './Modules/Homepage/Homepage'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function Application() {
 return (
<BrowserRouter>
<Routes>
     <Route path='/homepage' element={<MainPage />}></Route>
     <Route  path='*' element={<Navigate to='/homepage'/>}> <Route/>
</Route>
</Routes>
</BrowserRouter>
 )
}

export default Application
