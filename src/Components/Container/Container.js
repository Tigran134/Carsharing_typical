import React, { Component } from 'react'
import axios from 'axios'
import PromoCard from '../PromoCard/PromoCard';
import './Container.css'
import '../responce.css'
import yandex from '../../logocompany/yandex.jpg'
import deli from '../../logocompany/deli.jpg'
import belka from '../../logocompany/belkacar.jpg'
import youdrive from '../../logocompany/youdrive.jpg'
import bibi from '../../logocompany/bibi.jpg'
import rentmee from '../../logocompany/rentmee.jpg'
import sber from '../../logocompany/sbermarket.png'
import siti from '../../logocompany/sitimobil.jpg'
import {connect} from 'react-redux'

  class Container extends Component {
  
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


    const res = await axios.get('link')
    this.setState({yandex: res.data.yandex,
      deli: res.data.deli,
      belka: res.data.belka,
      youdrive: res.data.youdrive,
      bibi: res.data.bibi,
      rentmee: res.data.rentmee,
      citi: res.data.citi,
      market: res.data.market
    })

  
  }




  render() {
    return (
   
      <section className="section_2">
        <div className="container grid_card">


          <PromoCard promo={this.state.yandex} 
          info='Скидка 50% на первую поездку по тарифу «Фикс»!'
          company='ЯндексДрайв'
          img={yandex}
          number='145 раз.'
          copy={this.props.yandexDrive}
      
          ></PromoCard>
        
          <PromoCard
           promo={this.state.deli} 
           info='400 Бонусов на счет!'
           company='Делимобиль'
           img={deli}
           number='134 раза.'
           copy={this.props.delimobil}
         ></PromoCard>
          
          <PromoCard
           promo={this.state.belka} 
           info='300 Бонусов на счет!'
           company='БелкаКар'
           img={belka}
           number='87 раз.'
           copy={this.props.belkaCar}
           ></PromoCard>
         
          <PromoCard
           promo={this.state.youdrive}
            info='Скидка 50% на первую поездку!'
            company='YouDrive'
            img={youdrive}
            number='102 раза.'
            copy={this.props.youDrive}
            ></PromoCard>

          
          <PromoCard 
          promo={this.state.rentmee} 
          info='250 бонусов на счет!' 
          company='Rentmee'
          img={rentmee}
          number='47 раз.'
          copy={this.props.rentmee}
          ></PromoCard>
         
          <PromoCard 
          promo={this.state.bibi} 
          info='100 бонусов на счет!' 
          company='Би-Би Кар'
          img={bibi}
          number='34 раз'
          copy={this.props.bibi}
        ></PromoCard>
          
          <PromoCard 
          promo={this.state.citi} 
          info='Скидка 500р на поездки!' 
          company='СитиМобил'
          img={siti}
          number='54 раза.'
          copy={this.props.siti}
          ></PromoCard>
          
          <PromoCard
           promo={this.state.market} 
           info='Скидка 250р при заказе на 1500р!' 
           company='СберМаркет'
           img={sber}
           number='32 раза.'
           copy={this.props.sber}
           ></PromoCard>

        </div>
      </section>
    )
  }
}

function mapStateToProps(state){
  return {
    yandexDrive:state.promocodes.yandexDrive,
    delimobil:state.promocodes.delimobil,
    belkaCar:state.promocodes.belkaCar,
    youDrive:state.promocodes.youDrive,
    rentmee:state.promocodes.rentmee,
    bibi:state.promocodes.bibi,
    siti:state.promocodes.siti,
    sber:state.promocodes.sber
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     copyYandex: () => dispatch ({type:'CHANGEYANDEX'}),
//     changeDeli: () => dispatch ({type:'CHANGEDELI'})
//     // changeBelka: (promo) => dispatch ({type: 'CHANGEBELKA', payload:promo})
//     // changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo}),
//     // changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo}),
//     // changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo})
//   }
// }

export default connect(mapStateToProps,null)(Container)
