import React, { Component } from 'react'
import './PromoCard.css'
import '../responce.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { connect } from 'react-redux'



class PromoCard extends Component {

  state = {
    copied: false
  }


  statevalue = () => {
    if (this.props.company === 'ЯндексДрайв') {

      this.props.copyYandex()
    }
    else if (this.props.company === 'Делимобиль') {

      this.props.changeDeli()
    }

    else if (this.props.company === 'БелкаКар') {

      this.props.copyBelka()
    }
    else if (this.props.company === 'YouDrive') {

      this.props.copyYou()
    }

    else if (this.props.company === 'Rentmee') {

      this.props.copyRent()
    }

    else if (this.props.company === 'Би-Би Кар') {

      this.props.copyBiBi()
    }

    else if (this.props.company === 'СитиМобил') {

      this.props.copySiti()
    }

    else if (this.props.company === 'СберМаркет') {

      this.props.copySber()
    }

  }

  render() {
    return (
      <div className="card">
        <h1>{this.props.company}</h1>
        <img src={this.props.img} alt="" />
        <br />
        <h3>{this.props.info}</h3>
        <div className="promo">{this.props.promo}</div>
        <span className='span_active' >Активировали {this.props.number}</span>
        <br />

        <CopyToClipboard text={this.props.promo}
          onCopy={() => this.setState({ copied: true })}>
          {/* {this.props.copy} */}

          <button onClick={this.statevalue} className="button"> {this.props.copy} </button>
          {/* {this.props.yandexDrive? <button className="button" >Скопировано</button> :null} */}
          {/* {this.props.delimobil? <button onClick={this.props.changeDeli} className="button" >Скопировано</button> :<button onClick={this.props.changeDeli} className="button" >Скопировать</button>} */}

        </CopyToClipboard>




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
    bibi: state.promocodes.bibi,
    sber: state.promocodes.sber
  }
}

function mapDispatchToProps(dispatch) {
  return {
    copyYandex: () => dispatch({ type: 'CHANGEYANDEX' }),
    changeDeli: () => dispatch({ type: 'CHANGEDELI' }),
    copyBelka: () => dispatch({ type: 'CHANGEBELKA' }),
    copyYou: () => dispatch({ type: 'CHANGEYOU' }),
    copyRent: () => dispatch({ type: 'CHANGERENT' }),
    copyBiBi: () => dispatch({ type: 'CHANGEBIBI' }),
    copySiti: () => dispatch({ type: 'CHANGESITI' }),
    copySber: () => dispatch({ type: 'CHANGESBER' })


    // changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo}),
    // changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo}),
    // changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(PromoCard)
