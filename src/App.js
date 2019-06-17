import React, { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import TextLoop from 'react-text-loop'
import Collapsible from 'react-collapsible'

import telegram from './assets/telegram.svg'
import github from './assets/github.svg'

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
          <a id="app" className="menu-item" href="https://app.recover.to">APPLICATION</a>
          <a id="add" className="menu-item" href="https://app.recover.to">ADD ITEM</a>
          <a id="claim" className="menu-item" href="https://app.recover.to">CLAIM ITEM</a>
          <a id="telegram" className="menu-item" href="https://t.me/joinchat/FHLxh03ifcIUaiFAu8DE0g">TELEGRAM</a>
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
                <span>Pets.</span>
                <span>Keys.</span>
                <span>Wallet.</span>
                <span>Bag.</span>
                <span>Tablet.</span>
              </TextLoop>
            </div>
            <div className="App-header-wrapper-content-subtitle">
              Protect your items from loss
            </div>
            <div className="App-header-wrapper-content-buttons">
              <a href="#App-section-how-h2">Learn More</a>
              <div className="App-header-wrapper-content-buttons-space">{' '}</div>
              <a className="btn-solid" href="https://app.recover.to">Safe your item</a>
            </div>
          </div>
      </header>
      <section className="App-section App-section-how">
        <h2 id="App-section-how-h2" className="App-section-how-h2">
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
        <div className='App-section-ctas-owner' onClick={e => {window.location.href = 'https://app.recover.to'}}>
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
        <div className='App-section-ctas-finder' onClick={e => {window.location.href = 'https://app.recover.to'}}>
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
          <h4 className="App-section-useCases-h4">SAFE DATA LIKE YOUR ...</h4>
          <div className="App-section-useCases-card App-section-useCases-key">
            <div className="App-section-useCases-icon App-section-useCases-key-icon">{' '}</div>
            <h3>Private Keys</h3>
            <p>
              If you have private keys registered on Metamask, Jaxx or other hot wallets and 
              you have not kept your private keys on another support this service can be 
              very useful if you lose your device.
            </p>
          </div>   
          <div className="App-section-useCases-card App-section-useCases-work">
            <div className="App-section-useCases-icon App-section-useCases-work-icon">{' '}</div>
            <h3>Work</h3>
            <p>
              Sometimes our work such as writing a thesis, courses, a presentation is only recorded
              on our computer. Its loss will result in the loss of many hours of work. 
              Warning your computer against loss can be very convenient.
            </p>
          </div>
          <div className="App-section-useCases-card App-section-useCases-personnalData">
            <div className="App-section-useCases-icon App-section-useCases-personnalData-icon">{' '}</div>
            <h3>Personnal Data</h3>
            <p>
              Some personal data such as pictures of the last holiday, his notebook or private messages can be 
              very important. Here is a service that allows you to prevent the loss of this data.
            </p>
          </div>
        </div>
      </section>
      <section className="App-section App-section-faq">
        <div>
          <h2 className="App-section-faq-h2">FAQ</h2>
        </div>
        <div>
          <Collapsible trigger="Why use blockchain?">
            <p>For five main reasons:</p>
            <ol>
              <li>
                The service will always be accessible even if the 
                recover.to servers are down it will still be possible 
                to use this service by making requests directly on the blockchain.
              </li>
              <li>
                There are no intermediaries, which means that costs 
                are low. All you need to do is pay the transaction fees 
                (called gas) to use this service.
              </li>
              <li>
                We do not need to trust a third party service. This is 
                called a trustless service. The thing you trust is the 
                Ethereum protocol and the smart contracts 
                (<a href="https://etherscan.io/address/0x02C86846887faa1d964a838Dc50739B49c8329bc#contracts">Recover</a>&nbsp;
                and <a href="https://etherscan.io/address/0x988b3A538b618C7A603e1c11Ab82Cd16dbE28069#code">Kleros</a>). 
                These contracts are public and you can audit them 
                (technical skills required).
              </li>
              <li>
                Ethereum makes it easy to make valuable microtransactions, 
                which makes it possible to give a reward to the finder easily.
              </li>
              <li>
                The blockchain is interoperable with third-party services as 
                companies can easily use this service to plug their items 
                with lost and found service.
              </li>
            </ol>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="Is this application completely decentralized?">
            <p>Yes, all the logic of the application is programmed on a smart contract.</p>
            <p>To record encrypted contact information we will use our own IPFS node but you can use yours.</p>
            <p>
              Optional services are centralized such as email notifications when an object is found.
              It is possible for the user to bypass his services and do it manually.
            </p>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="How it works if the finder is not a cryptoenthousiast?">
            <p>
              It is possible to prefund the function for claiming an item to find which avoids the finder having
              to have Ether to pay for the gas of the "Claim" function.
            </p>
            <p>
              On the other hand, we automatically generate an Ethereum Wallet if the user does not have one.
            </p>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="Is it possible for a regular user to record an item?">
          <p>For the moment no but we are integrating this feature in future versions.</p>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="What happens if the user wants to be rewarded in fiat?">
            <p>
              With this release it is not possible to reward him directly in fiat.
            </p>
            <p>
              You have to make an arrangement with the finder to do this.
            </p>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="Why the contact information are not directly visible on the Qr Code?">
            <p>This avoids showing your personal information directly.</p>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="Is there a notification service when we claim a found?">
            <p>
              Yes, the owner receives an email notification if he/she has subscribed to this service
              but it is preferable to contact him/her also with the contact information he/she
              has provided to maximize your chances to get the reward.
            </p>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="Where do I put the sticker?">
          <p>
            Ideally it is good to put it in a place that is neither too visible nor too hidden.
            Indeed, it should be avoided that the scan of the QR code is too accessible if not someone
            to have access to your data when the object is not lost but it must be visible enough to
            if the object is lost a person can see it.
          </p>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="What happens if the finder does not want a reward?">
            <p>
              He has the possibility to refund all or part of the reward if he wishes.
            </p>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="What happens if one of the parties does not respect its commitments?">
            <p>
              After trying to resolve the problem in a friendly way it is possible to create a dispute on Kleros 
              to arbitrate the dispute to handle the funds.
            </p>
          </Collapsible>
        </div>
      </section>
      <footer className="App-footer">
        <img onClick={e => {window.location.href = 'https://t.me/joinchat/FHLxh03ifcIUaiFAu8DE0g'}} src={telegram} className="App-footer-telegram" />
        <img onClick={e => {window.location.href = 'https://github.com/blockchain-mafia/recoverto-contracts'}} src={github} className="App-footer-github" />
        @ 2019 RECOVER
      </footer>
    </div>
  )
}

export default App
