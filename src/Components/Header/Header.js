import React, { Component } from 'react'
import './Header.css'
import logo from '../../logocompany/IMG_5359.PNG'
import '../responce.css'


export default class Header extends Component {



render() {
 
    return (
    

<header className='header'>
  <div className='header'> 
      <div className="container">
        <div className="head">

          <div className="logo">
            <img src={logo} className="logo" />
            <h2 className='logo_h2' >Типичный Каршеринг</h2>
          </div>

          <div className='promo_cars' >
            <h2> Промокоды Каршеринг </h2>

          </div>

          <div className="contacts">
            <a className="vk" href="https://vk.com/typical_carsharing"></a>
            <a className="tg" href="https://teleg.run/typical_carsharing"></a>
          </div>

        </div>
      </div>
      </div>
    </header>
    )
  }
}
