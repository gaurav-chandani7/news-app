import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<News key="all"/>}/>
            <Route path='/national' element={<News category='national' key="national"/>}/>
            <Route path='/business' element={<News category='business' key="business"/>}/>
            <Route path='/sports' element={<News category='sports' key="sports"/>}/>
            <Route path='/world' element={<News category='world' key="world"/>}/>
            <Route path='/politics' element={<News category='politics' key="politics"/>}/>
            <Route path='/technology' element={<News category='technology' key="technology"/>}/>
            <Route path='/startup' element={<News category='startup' key="startup"/>}/>
            <Route path='/entertainment' element={<News category='entertainment' key="entertainment"/>}/>
            <Route path='/miscellaneous' element={<News category='miscellaneous' key="miscellaneous"/>}/>
            <Route path='/hatke' element={<News category='hatke' key="hatke"/>}/>
            <Route path='/science' element={<News category='science' key="science"/>}/>
            <Route path='/automobile' element={<News category='automobile' key="automobile"/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}
