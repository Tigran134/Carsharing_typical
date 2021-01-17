import React, { Component } from 'react'
import axios from 'axios'
import PromoCard from '../PromoCar/PromoCard/PromoCard';
import './Container.css'


export default class Container extends Component {

  state = {
    yandex:'...',
    deli:'...',
    belka:'...',
    youdrive:'...',
    bibi:'...',
    rentmee:'...',
    citi:'...',
    market:'...'
  }



  async componentDidMount() {
    console.log('111');

    const res = await axios.get('https://promocode-carsharing.firebaseio.com/promo13423.json')
    this.setState({yandex: res.data.yandex,
      deli: res.data.deli,
      belka: res.data.belka,
      youdrive: res.data.youdrive,
      bibi: res.data.bibi,
      rentmee: res.data.rentmee,
      citi: res.data.citi,
      market: res.data.market
    })

    console.log(this.state);
  }


  render() {
    return (

      <section class="section_2">
        <div class="container_2 grid_card">


          <PromoCard promo={this.state.yandex} ></PromoCard>
          <PromoCard promo={this.state.deli} ></PromoCard>
          <PromoCard promo={this.state.belka} ></PromoCard>
          <PromoCard promo={this.state.youdrive} ></PromoCard>

          <PromoCard promo={this.state.bibi} ></PromoCard>
          <PromoCard promo={this.state.rentmee} ></PromoCard>
          <PromoCard promo={this.state.citi} ></PromoCard>
          <PromoCard promo={this.state.market} ></PromoCard>

        </div>
      </section>
    )
  }
}
