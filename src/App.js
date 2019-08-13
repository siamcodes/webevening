import React, { Component } from 'react';
import logo from './logo.svg';
import photo from './assets/pic1.jpg';
import './App.css';
//เรียกใช้ Route
import {Route} from 'react-router-dom';
//เรียกใช้งาน Component ต่างๆ
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Faq from './components/Faq/Faq.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
         <Route exact={true} path='/' component={Home} />
         <Route path='/about' component={About} />
         <Route path='/contact' component={Contact} />
         <Route path='/faq' component={Faq} />
        <Footer/>
      </div>
    );
  }
}

export default App;
