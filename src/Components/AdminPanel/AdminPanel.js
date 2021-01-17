import React, { Component } from 'react'
import {connect} from 'react-redux'
import './AdminPanel.css'
import axios from 'axios'

 class AdminPanel extends Component {
   state ={ 
     yandexDrive:'RaF12nU'
   }
   
   obmenbd = async (event) => {
     event.preventDefault()
try { 
     const responce = await axios.get('https://promocode-carsharing.firebaseio.com.json')
} catch (e) {
  console.log(e);
  
}
 
     
   }

 async  componentDidMount (){
   const res = await axios.get('https://promocode-carsharing.firebaseio.com/promo.json')
      
 console.log(res.data,'222');
 this.setState({yandexDrive:res.data})
   }

   render() {

    console.log(this.state,'111111');
    return (
      <div>
        ADMINKA
        <ul>
          <li>Поменять промкод ЯндексДрайв</li>
          <input type='text' className='' ></input>
          <button onClick={this.props.changePromo.bind(this,'RaF12nU')} >ЯндексДрайв</button>
          <br></br><br></br>
          <li>Поменять промкод Делимобиль</li>
          <input type='text'></input>
          <button onClick={this.props.changeDeli.bind(this,'REF12N')}>Делимобиль</button>
          <br></br><br></br>
          <li>Поменять промкод БелкаКар</li>
          <input type='text'></input>
          <button onClick={this.props.changeDeli.bind(this,'REF12N')}>БелкаКар</button>
          <br></br><br></br>
          <li>Поменять промкод Юдрайв</li>
          <input type='text'></input>
          <button onClick={this.props.changeDeli.bind(this,'REF12N')}>Юдрайв</button>
          <br></br><br></br>
          <li>Поменять промкод Рентмии</li>
          <input type='text'></input>
          <button onClick={this.props.changeDeli.bind(this,'REF12N')}>Рентмии</button>
          <br></br><br></br>
          <li>Поменять промкод Би-Би</li>
          <input type='text'></input>
          <button onClick={this.props.changeDeli.bind(this,'REF12N')}>Би-Би</button>
          
          <button onClick={this.obmenbd}>AXIOS</button>
        </ul>

      
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    yandexDrive:state.promocodes.yandexDrive,
    delimobil:state.promocodes.delimobil,
    belkaCar:state.promocodes.belkaCar,
    youDrive:state.promocodes.youDrive,
    rentmee:state.promocodes.rentmee,
    bibi:state.promocodes.bibi
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changePromo: (promo) => dispatch ({type: 'CHANGEYANDEX', payload:promo}),
    changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo}),
    changeBelka: (promo) => dispatch ({type: 'CHANGEBELKA', payload:promo}),
    changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo}),
    changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo}),
    changeDeli: (promo) => dispatch ({type: 'CHANGEDELI', payload:promo})
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(AdminPanel)
