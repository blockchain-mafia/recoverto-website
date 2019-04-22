import React, { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import TextLoop from 'react-text-loop'

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
      <section className="App-section App-section-how">
        <h2 className="App-section-how-h2">
          A SIMPLE WORKFLOW TO<br /> 
          RECOVER YOUR ITEM 
        </h2>
        <div className="App-section-how-illustration App-section-how-illustration0">{' '}</div>
        <div className="App-section-how-illustration App-section-how-illustration1">{' '}</div>
        <div className="App-section-how-illustration App-section-how-illustration2">{' '}</div>
        <div className="App-section-how-description0">
          <ol>
            <li>Generate and paste your Qr Code on your item.</li>
          </ol>
        </div>
        <div className="App-section-how-description1">
          <ol start="2">
            <li>Seeing the reward, the finder is incentived to give you back the item.</li>
          </ol>
        </div>
        <div className='App-section-how-description2'>
          <ol start="3">
            <li>Exchange the reward for the item.</li>
          </ol>
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
        <div className='App-section-technology-card App-section-technology-escrow'>
        <div className="App-section-technology-icon App-section-technology-escrow-icon">{' '}</div>
          <h3>Escrow</h3>
          <p>Music is an art form whose medium is sound and silence. Generally, a song is considered the smallest standalone work of music, especially when involving singing. </p>
        </div>
        <div className='App-section-technology-card App-section-technology-privacy'>
          <div className="App-section-technology-icon App-section-technology-privacy-icon">{' '}</div>
          <h3>Privacy</h3>
          <p>Music is an art form whose medium is sound and silence. Generally, a song is considered the smallest standalone work of music, especially when involving singing. </p>
        </div>
        <div className='App-section-technology-card App-section-technology-blockchain'>
          <div className="App-section-technology-icon App-section-technology-blockchain-icon">{' '}</div>
          <h3>Blockchain</h3>
          <p>Music is an art form whose medium is sound and silence. Generally, a song is considered the smallest standalone work of music, especially when involving singing. </p>
        </div>
      </section>
    </div>
  )
}

export default App
