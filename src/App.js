import React, { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import TextLoop from 'react-text-loop'

import safeComputer from './assets/safe-computer-qr-code.svg'
import findDevice from './assets/find-device.svg'
import exchangeItem from './assets/exchange-device-eth.svg'

import './App.css'

const App = () => {
  const [isTop, setTop] = useState(true)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY < 30 !== isTop) {
        setTop(false)
      } else {
        setTop(true)
      }
    })
  }, [])

  return (
    <div className="App">
      <div className={`App-header-menu ${isTop ? 'App-header-menu__isTop' : ''}`}>
        <div className="App-header-menu-logo">RECOVER</div>
        <Menu right>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      </div>
      <header className="App-header">
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
      </header>
      <section className='App-section App-section-how'>
        <h2 className='App-section-how-h2'>
          A SIMPLE WORKFLOW TO<br /> 
          RECOVER YOUR ITEM 
        </h2>
        <div className='App-section-how-illustration0'><img src={safeComputer} /></div>
        <div className='App-section-how-illustration1'><img src={findDevice} style={{marginBottom: '-24px'}} /></div>
        <div className='App-section-how-illustration2'><img src={exchangeItem} style={{marginBottom: '-24px'}} /></div>

        <div className='App-section-how-description0'>
          1. Paste your Qr Code on your item.
        </div>
        <div className='App-section-how-description1'>
          2. Seeing the reward, the finder is incentived to give you back the item.
        </div>
        <div className='App-section-how-description2'>
          3. Exchange the reward for the item.
        </div>
      </section>
      <section className='App-section App-section-ctas'>
        <div className='App-section-ctas-owner'>
          <div className='App-section-ctas-header-top'>
            OWNER
          </div>
          <header className='App-section-ctas-header'>
            Take care of your item against loss.
          </header>
          <div className='App-section-ctas-content'>
            Set up the reward and enter your contact information to generate the QR Code.
          </div>
          <div className='App-section-ctas-link'>
            SAFE YOUR ITEM
          </div>
        </div>
        <div className='App-section-ctas-finder'>
        <div className='App-section-ctas-header-top'>
            FINDER
          </div>
          <header className='App-section-ctas-header'>
            Be rewarded when you find and give back a lost item.
          </header>
          <div className='App-section-ctas-content'>
            Claim the discovered of a lost item to get the reward. 
          </div>
          <div className='App-section-ctas-link'>
            CLAIM DISCOVERED
          </div>
        </div>
      </section>
      <section className='App-section App-section-technology'>
        <h2 className='App-section-technology-h2'>
          MORE TECHNOLOGY<br /> 
          FOR A BETTER SERVICE
        </h2>
      </section>
    </div>
  )
}

export default App
