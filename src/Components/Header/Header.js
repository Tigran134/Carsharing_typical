import React, { Component } from 'react'
import './Header.css'


export default class Header extends Component {



render() {
 
    return (
    

<header>
      <div class="container">
        <div class="head">

          <div class="logo">
            <img src="./IMG_5359.PNG" aclass="logo" />
            <h2>Типичный Каршеринг</h2>
          </div>

          <div>
            <h2> Промокоды Каршеринг </h2>

          </div>

          <div class="contacts">
            <a class="vk" href="https://vk.com/typical_carsharing"></a>
            <a class="tg" href="https://teleg.run/typical_carsharing"></a>
          </div>

        </div>
      </div>
    </header>
    )
  }
}
