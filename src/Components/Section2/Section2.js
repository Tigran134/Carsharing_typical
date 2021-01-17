import React, { Component } from 'react'
import './Section2.css'
import axios from 'axios'

export default class Section2 extends Component {

state = {
  date:'!'
}

  async componentDidMount() {
    console.log('111');
    
    const res = await axios.get('https://promocode-carsharing.firebaseio.com/date.json')
    this.setState({ date: res.data.now })
    
  }


  render() {
    return (
  
        
    <section class="section1_1">

<h1>Актуальные промокоды для каршеринга {this.state.date} </h1> 

</section>
    
    )
  }
}
