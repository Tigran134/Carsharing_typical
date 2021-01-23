import React, { Component } from 'react'
import './Footer.css'
import '../responce.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
<div className="container">
  <div className="flex_footer">

    <a href="https://teleg.run/typical_carsharing">Наш ТГ канал </a>
      <a href="https://vk.com/typical_carsharing">Наша группа ВК </a>
    </div>
 
    <span>Для размещения своего промокода писать в наши социальные сети.</span>
</div>
</footer>
    )
  }
}
