import React, { Component } from 'react'
import './PromoCar.css'
import { connect } from 'react-redux'
import axios from 'axios'



class PromoCar extends Component {

  state = {
    deli: '',
    yandex: '',

  }

  // state = {
  //   yandexDrive: '123',
  //   delimobil: '456',
  //   belkaCar: '789',
  //   youDrive: '1011',
  //   rentmee: '1112',
  //   bibi: '1314'
  // }


  async componentDidMount() {
    console.log('111');
    
    const res = await axios.get('https://promocode-carsharing.firebaseio.com/promo.json')
    this.setState({ yandex: res.data.yandex })
    console.log(res.data,'33');
    

  }

  render() {
    // console.log(res, '777777');


    return (
      <div>
        <div className='Promocods'>

          <div className='PromoCar'>
            ЯндексДрайв
        <br></br>
            <h3>{this.state.yandex}</h3>

          </div>
          <div className='PromoCar'>
            Делимобиль
        <br></br>
            <h3>{this.props.delimobil}</h3>

          </div>
          <div className='PromoCar'>
            BelkaCar
        <br></br>
            <h3>{this.props.belkaCar}</h3>

          </div>
        </div>

        <div className='Promocods'>

          <div className='PromoCar'>
            YouDrive
  <br></br>
            <h3>{this.props.youDrive}</h3>

          </div>
          <div className='PromoCar'>
            Rentmee
  <br></br>
            <h3>{this.props.rentmee}</h3>

          </div>
          <div className='PromoCar'>
            Bi-Bi Car
  <br></br>
            <h3>{this.props.bibi}</h3>

          </div>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    yandexDrive: state.promocodes.yandexDrive,
    delimobil: state.promocodes.delimobil,
    belkaCar: state.promocodes.belkaCar,
    youDrive: state.promocodes.youDrive,
    rentmee: state.promocodes.rentmee,
    bibi: state.promocodes.bibi
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PromoCar)
