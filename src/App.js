import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header/Header';
import PromoCar from './Components/PromoCar/PromoCar';
import Social from './Components/Social/Social';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import PromoCard from './Components/PromoCar/PromoCard/PromoCard';
import axios from 'axios'
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';

export default class App extends Component {

  state = {
  deli:'...'

}



render() {
  return (
    <div className="App">
     <Header></Header>
     <Section1></Section1>
     <Section2></Section2>
     <Container></Container>
     <Footer></Footer>
    
   
    </div>
  );
}

}
