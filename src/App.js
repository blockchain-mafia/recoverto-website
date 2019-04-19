import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import TextLoop from 'react-text-loop'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu right>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
          </Menu>
          <div className="App-header-logo">RECOVER</div>
          <div className="App-header-wrapper">
            <div className="App-header-wrapper-content">
              Lost and Found service
              <br />
              <div>
                for {' '}
                <TextLoop mask={true} interval={1400}>
                  <span>Smartphone.</span>
                  <span>Wallet.</span>
                  <span>Laptop.</span>
                  <span>Keys.</span>
                  <span>Bag.</span>
                  <span>Tablet.</span>
                </TextLoop>
              </div>
              <div className="App-header-wrapper-content-buttons">
                <button>Learn More</button>
                <div className="App-header-wrapper-content-buttons-space">{' '}</div>
                <button className="btn-solid">Safe your item</button>
              </div>
            </div>
          </div>
        </header>
        <section>
        </section>
      </div>
    )
  }
}

export default App
