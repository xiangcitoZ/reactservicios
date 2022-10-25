import React, { Component } from 'react'
import logoHome from './../../assets/images/home.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Component Home</h1>
        <img src={logoHome}></img>
      </div>
    )
  }
}
