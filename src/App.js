import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Home from './Components/Home'
import BasicInfo from './Components/BasicInfo'

export default function App() {
  return (
    <Routes>
      <Route exact path = '/' element = {<Home/>}/>
      <Route exact path = '/experience' element = {<Experience/>}/>
      <Route exact path = '/project' element = {<Projects/>}/>
      <Route exact path = '/skill' element = {<Skills/>}/>
      <Route exact path = '/basicInfo' element = {<BasicInfo/>}/>
    </Routes>
  )
}
