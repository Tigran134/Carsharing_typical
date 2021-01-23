import React, { Component } from 'react'
import './Section2.css'
import axios from 'axios'
import '../responce.css'

export default class Section2 extends Component {

state = {
  date:'!'
}

  async componentDidMount() {

    
    const res = await axios.get('link')
    this.setState({ date: res.data.now })
    
  }


  render() {
    return (
  
        
    <section className="section1_1">

    <div className='container flex_s11' > 
<h1>Актуальные промокоды для каршеринга {this.state.date} </h1> 
    </div>

</section>
    
    )
  }
}
