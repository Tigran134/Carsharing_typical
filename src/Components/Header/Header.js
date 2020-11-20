import React, { Component } from 'react'
import './Header.css'
import { NavLink, Route} from 'react-router-dom'
import AdminPanel from '../AdminPanel/AdminPanel'

export default class Header extends Component {
state={
  login:'',
  password:'',
  checkAdmin: false,
  logAdmin:'Tigran134',
  pasAdmin:'Valio134'
}

checkAuth = (event) => {
  event.preventDefault()
  if (this.state.login === 'Tigran134' && this.state.password==='Valio134' ) {
this.setState({checkAdmin:true}) }
else {this.setState({checkAdmin:false})}

console.log('33');
}
  



render() {
  console.log(this.state.login);
    return (
      <div className='Header' > 

      {/* <NavLink to={'/auth'} exact={} >Войти</NavLink> */}
      <form>
        <input type='text' placeholder='login' className={'color:#fff'} onChange={event => this.setState({login:event.target.value})} ></input>
        <br></br>
        <input type='text' placeholder='password' onChange={event => this.setState({password:event.target.value})}></input>
        <br></br>
        <button onClick={this.checkAuth} >Войти</button>
      </form>

      {this.state.checkAdmin ? <AdminPanel></AdminPanel> : null}

  

      <div className='title' >
        Промокоды для каршеринга Ноябрь 2020
      </div>
      </div>
      
    )
  }
}
