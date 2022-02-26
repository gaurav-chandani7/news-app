import { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component<any, {mode: string}> {
  constructor(props: any) {
    super(props);
    this.state= {
      mode: 'light'
    }
  }
  toggleMode = () => {
    console.log("togglemode");
    if(this.state.mode==="light"){
      this.setState({
        mode: "dark"
      })
    }else{
      this.setState({
        mode: "light"
      })
    }
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar mode={this.state.mode} toggleMode ={this.toggleMode}/>
          <Routes>
            <Route path='/' element={<News mode={this.state.mode} key="all"/>}/>
            <Route path='/national' element={<News mode={this.state.mode} category='national' title='India News' key="national"/>}/>
            <Route path='/business' element={<News mode={this.state.mode} category='business' title='Business News' key="business"/>}/>
            <Route path='/sports' element={<News mode={this.state.mode} category='sports' title='Sports News' key="sports"/>}/>
            <Route path='/world' element={<News mode={this.state.mode} category='world' title='World News' key="world"/>}/>
            <Route path='/politics' element={<News mode={this.state.mode} category='politics' title='Politics News' key="politics"/>}/>
            <Route path='/technology' element={<News mode={this.state.mode} category='technology' title='Technology News' key="technology"/>}/>
            <Route path='/startup' element={<News mode={this.state.mode} category='startup' title='Startup News' key="startup"/>}/>
            <Route path='/entertainment' element={<News mode={this.state.mode} category='entertainment' title='Entertainment News' key="entertainment"/>}/>
            <Route path='/miscellaneous' element={<News mode={this.state.mode} category='miscellaneous' title='Miscellaneous News' key="miscellaneous"/>}/>
            <Route path='/hatke' element={<News mode={this.state.mode} category='hatke' title='Hatke News' key="hatke"/>}/>
            <Route path='/science' element={<News mode={this.state.mode} category='science' title='Science News' key="science"/>}/>
            <Route path='/automobile' element={<News mode={this.state.mode} category='automobile' title='Automobile News' key="automobile"/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}
