import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Assets/css/main.css';
import Header from './Components/header';
import Banner from './Components/banner';
import Maincontent from './Components/maincontent';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Banner></Banner>
        <Maincontent></Maincontent>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
