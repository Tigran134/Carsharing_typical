import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header/Header';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';


export default class App extends Component {



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
