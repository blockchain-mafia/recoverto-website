import React, { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import TextLoop from 'react-text-loop'
import Collapsible from 'react-collapsible'

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
          <p>The reward funds are locked in an escrow system to incentive the finder to return the item.</p>
        </div>
        <div className='App-section-technology-card App-section-technology-privacy'>
          <div className="App-section-technology-icon App-section-technology-privacy-icon">{' '}</div>
          <h3>Privacy</h3>
          <p>Your personnal data are encrypted and they are only accessible for the person who found your item.</p>
        </div>
        <div className='App-section-technology-card App-section-technology-blockchain'>
          <div className="App-section-technology-icon App-section-technology-blockchain-icon">{' '}</div>
          <h3>Blockchain</h3>
          <p>This is a project based on Ethereum and Kleros to guarentee the resiliance of the application and to enforce the reward.</p>
        </div>
      </section>
      <section className="App-section-useCases-wrapper">
        <div className="App-section App-section-useCases">
          <h2 className="App-section-useCases-h2">
            YOUR DATA ARE MORE IMPORTANT<br /> 
            THAN YOUR DEVICE
          </h2>
          <div className="App-section-useCases-card App-section-useCases-key">
            <div className="App-section-useCases-icon App-section-useCases-key-icon">{' '}</div>
            <h3>Private Keys</h3>
            <p>Prevent your crypto wallet/keys (computer, smartphone, hardware ledger) against loss. Jaxx Metamask. </p>
          </div>   
          <div className="App-section-useCases-card App-section-useCases-work">
            <div className="App-section-useCases-icon App-section-useCases-work-icon">{' '}</div>
            <h3>Work</h3>
            <p>Your personnal data are encrypted and they are only accessible for the person who found your item.</p>
          </div>
          <div className="App-section-useCases-card App-section-useCases-personnalData">
            <div className="App-section-useCases-icon App-section-useCases-personnalData-icon">{' '}</div>
            <h3>Personnal Data</h3>
            <p>This is a project based on Ethereum and Kleros to guarentee the resiliance of the application and to enforce the reward.</p>
          </div>
        </div>
      </section>
      <section className="App-section App-section-faq">
        <h2 className="App-section-faq-h2">FAQ</h2>
        <Collapsible trigger="Why we don't use a password instead of a private code in the Qr Code?">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>also prevent ddos</p>
          <p>fund finder</p>
        </Collapsible>
        <Collapsible trigger="Why the contact information are not directly visible on the Qr Code?">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
        <Collapsible trigger="Is there a notification service when we clam a found?">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
        <Collapsible trigger="Ou puis je trouver des stickers imprimables?">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
      </section>
      <footer className="App-footer">
        @ 2019 RECOVER
      </footer>
    </div>
  )
}

export default App
