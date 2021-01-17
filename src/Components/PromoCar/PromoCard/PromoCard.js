import React, { Component } from 'react'
import './PromoCard.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class PromoCard extends Component {

  state = {
    copied:false
  }

  render() {
    return (
      <div class="card">
      <h1>Делимобиль</h1>
      <img src="https://delimobil-promocode.ru/img/logos/delimobil.jpg" alt=""/>
      <br/>
      <h3>400 бонусов на счет!</h3>
    <div class="promo">{this.props.promo}</div>
      <span>555 раз</span>
      <br/>

      <CopyToClipboard text={this.props.promo}
          onCopy={() => this.setState({copied: true})}>
               <button class="btncopy" >Скопировать</button>
        </CopyToClipboard>


     

    </div>

    )
  }
}
