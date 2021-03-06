import React, { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import TextLoop from 'react-text-loop'
import Collapsible from 'react-collapsible'
import Modal from 'react-responsive-modal'

import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import mail from '../assets/mail.svg'

import './home.css'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Home = () => {
  const [isTop, setTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if ((window.scrollY < 30) !== isTop) {
        setTop(false)
      } else {
        setTop(true)
      }
    })

    const urlParams = new URLSearchParams(window.location.search)
    const email = urlParams.get('email-to-confirm')

    if (email)
      fetch('/.netlify/functions/email-confirmation', {
        method: 'post',
        body: JSON.stringify({ email })
      })
      .then(res => res.json())
      .then(data => {
        if (data.result === "Data updated.")
          setIsEmailConfirmed(true)
      }) // open box your email is confirmed. (emoticon party)
      .catch(err => console.error(err))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', email })
    })
      .then(res => res.ok ? setIsOpen(true) : alert('Email error.'))
      .catch(err => alert('Email error.'))
  }

  return (
    <div className="App">
      <Modal
        focusTrapped={false}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        center
        styles={{
          closeButton: {background: 'transparent'},
          modal: {width: '80vw', maxWidth: '300px', padding: '6vh 3vw'}
        }}
      >
        <h1>Email Confirmation</h1>
        <p>An email has been sent to {email} to confirm your email address.</p>
      </Modal>
      <Modal
        focusTrapped={false}
        open={isEmailConfirmed}
        onClose={() => setIsEmailConfirmed(false)}
        center
        styles={{
          closeButton: {background: 'transparent'},
          modal: {width: '80vw', maxWidth: '300px', padding: '6vh 3vw'}
        }}
      >
        <h1>Email Confirmed</h1>
        <p>Your email address is confirmed.</p>
      </Modal>
      <div className={`App-header-menu ${isTop ? 'App-header-menu__isTop' : ''}`}>
        <div className="App-header-menu-logo">RECOVER</div>
        <Menu right>
          <a id="app" className="menu-item" href="https://app.recover.ws">APPLICATION</a>
          {/* FIXME: add route to add an item */}
          {/* <a id="add" className="menu-item" href="https://app.recover.ws/new/items/undefined/pk/undefined">ADD MY ITEM</a> */}
        </Menu>
      </div>
      <header className="App-header">
        <div className="App-header-wrapper-content">
          Lost and Found service
          <br />
          <div>
            for {' '}
            <TextLoop mask={true} interval={1400}>
              <span>Phone</span>
              <span>Wallet</span>
              <span>Pets</span>
              <span>Keys</span>
              <span>Wallet</span>
              <span>Bag</span>
              <span>Tablet</span>
              <span>Ledger</span>
              <span>Luggage</span>
              <span>AirPods</span>
            </TextLoop>
          </div>
          <div className="App-header-wrapper-content-subtitle">
            Protect your valuables from loss
          </div>
          <div className="App-header-wrapper-content-buttons">
            <a href="#App-section-how-h2">Learn More</a>
            <div className="App-header-wrapper-content-buttons-space">{' '}</div>
            <a className="btn-solid" href="https://app.recover.ws">Safe your Item</a>
          </div>
        </div>
      </header>
      <section className="App-section App-section-how">
        <h2 id="App-section-how-h2" className="App-section-how-h2">
          A SIMPLE WORKFLOW TO<br />
          RECOVER YOUR VALUABLES
        </h2>
        <div className="App-section-how-illustration App-section-how-illustration0">{' '}</div>
        <div className="App-section-how-illustration App-section-how-illustration1">{' '}</div>
        <div className="App-section-how-illustration App-section-how-illustration2">{' '}</div>
        <div className="App-section-how-description0">
          <ol>
            <li>Generate and paste your Qr Code on your valuable.</li>
          </ol>
        </div>
        <div className="App-section-how-description1">
          <ol start="2">
            <li>Seeing the reward, the finder is incentivized to return your item.</li>
          </ol>
        </div>
        <div className='App-section-how-description2'>
          <ol start="3">
            <li>Exchange the reward for the valuable.</li>
          </ol>
        </div>
      </section>
      <section className='App-section App-section-ctas'>
        <div className='App-section-ctas-owner' onClick={e => {window.location.href = 'https://app.recover.ws'}}>
          <div className='App-section-ctas-header-top'>
            OWNER
          </div>
          <header className='App-section-ctas-header'>
            Take insure of your valuables against loss.
          </header>
          <div className='App-section-ctas-content'>
            Set up the reward and enter your contact information to generate the QR Code.
          </div>
          <div className='App-section-ctas-link'>
            SAFE YOUR ITEM
          </div>
        </div>
        <div className='App-section-ctas-finder' onClick={e => {window.location.href = 'https://app.recover.ws'}}>
          <div className='App-section-ctas-header-top'>
            FINDER
          </div>
          <header className='App-section-ctas-header'>
            Be rewarded when you find and give back a lost item.
          </header>
          <div className='App-section-ctas-content'>
            Claim the discovery of a lost item to get the reward.
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
          <p>Your personal data remains encrypted and it is only accessible to the person who finds the item.</p>
        </div>
        <div className='App-section-technology-card App-section-technology-blockchain'>
          <div className="App-section-technology-icon App-section-technology-blockchain-icon">{' '}</div>
          <h3>Blockchain</h3>
          <p>This is a project-based on Ethereum and Kleros to guarantee the resilience of the application and to enforce the reward.</p>
        </div>
      </section>
      <section className="App-section-useCases-wrapper">
        <div className="App-section App-section-useCases">
          <h2 className="App-section-useCases-h2">
            YOUR DATA IS MORE IMPORTANT<br />
            THAN YOUR DEVICE
          </h2>
          <h4 className="App-section-useCases-h4">SAFE DATA LIKE YOUR ...</h4>
          <div className="App-section-useCases-card App-section-useCases-key">
            <div className="App-section-useCases-icon App-section-useCases-key-icon">{' '}</div>
            <h3>Private Keys</h3>
            <p>
              If you have private keys registered on Metamask, Jaxx, or any other hot wallets
              and you have not backed them up on another support then this service is for you.
            </p>
          </div>
          <div className="App-section-useCases-card App-section-useCases-work">
            <div className="App-section-useCases-icon App-section-useCases-work-icon">{' '}</div>
            <h3>Work</h3>
            <p>
              Sometimes your work such as writing a thesis, in-progress courses, presentations are only
              recorded on the computer. Its loss will result in the loss of many hours of work.
              Safeguarding your computer against such losses can be very convenient.
            </p>
          </div>
          <div className="App-section-useCases-card App-section-useCases-personnalData">
            <div className="App-section-useCases-icon App-section-useCases-personnalData-icon">{' '}</div>
            <h3>Personal Data</h3>
            <p>
              Some personal data such as pictures from the last holiday, private notebooks or journals,
              or even private messages is worth more. Here is a service that allows you to safeguard the loss of this data.
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
                The service will always be accessible even if recover.ws servers are down.
                It will still be possible to use this service by making requests directly on the blockchain.
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
                with this lost and found service.
              </li>
            </ol>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="Is this application completely decentralized?">
            <p>Yes, all the logic of the application is programmed on a smart contract.</p>
            <p>To record encrypted contact information we will use our own IPFS node but you can use yours too.</p>
            <p>
              Optional services are centralized such as an email notification you will receive when an object is found.
              It is possible for the user to bypass this service and do it manually.
            </p>
            <p>
              On the other hand, if you use a third party service to print your Qr Code
              it will be able to read the encrypted data. You must have a minimum of trust
              in this service.
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
            <p>
              Not really, currently it is only possible to add items
              if you know how to use <a href="https://metamask.io/">Metamask</a>.
            </p>
            <p>We are integrating this feature, add item without Metamask, in future versions.</p>
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
              Yes, the owner receives an email notification if they have subscribed to this service
              but it is preferable to contact them directly with the contact information they have provided
              to maximize your chances to get the reward.
            </p>
          </Collapsible>
        </div>
        <div>
          <Collapsible trigger="Where do I put the sticker?">
          <p>
            Ideally, it is good to put it in a place that is neither too visible nor too hidden.
            Indeed, it should be avoided that the QR code is too accessible for someone to scan it if in case the item is not lost.
            This way the person may have access to your private data. On the other hand,
            the QR code must be visible to a person in case your item is lost.
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
      <section>
        <div className="App-cta-container">
          <div
            className="App-cta-container-cards App-cta-container-free"
            onClick={() => window.location.replace("https://app.recover.ws")}
          >
            <h3 className="App-cta-container-cards-title">FREE</h3>
            <ul>
              <li>Unlimited QR Codes</li>
              <li>Email Notifications</li>
              <li>SMS Notifications</li>
            </ul>
          </div>
          <div className="App-cta-container-cards App-cta-container-loser">
            <h3 className="App-cta-container-cards-title App-cta-container-cards-title-white">LOSER PACK</h3>
            <ul>
              <li>Email Notifications</li>
              <li>SMS Notifications</li>
              <li>Stickers</li>
              <li>Cards</li>
              <li>Keyring</li>
              <li>Qr Code Pre-funded</li>
              <li>Priority Support</li>
            </ul>
            { isSubmitting ? (
              <div
                className="App-cta-container-inbox"
              >
                Check your Inbox
              </div>
            ) : (
              <form className="App-cta-container-cards-form" onSubmit={handleSubmit} name="contact">
                <input
                  placeholder="@"
                  className="App-cta-container-cards-input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button
                  className="App-cta-container-cards-btn"
                  type="submit"
                >
                  Stay Tuned
                </button>
              </form>
            )}
          </div>
          {/* TODO open mail contact@recover */}
          <div className="App-cta-container-cards App-cta-container-company">
            <h3 className="App-cta-container-cards-title">COMPANY</h3>
            <ul>
              <li>Unlimited QR Codes</li>
              <li>API access</li>
              <li>Qr Code Pre-funded</li>
              <li>Priority Support</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="App-quote-container">
          <blockquote className="App-quote">USE IT OR LOSE IT</blockquote>
        </div>
      </section>
      <footer className="App-footer">
        <img onClick={e => {window.location.href = 'https://twitter.com/w_n1c01a5'}} src={twitter} className="App-footer-twitter" />
        <img onClick={e => {window.location.href = 'https://github.com/blockchain-mafia/recoverto-contracts'}} src={github} className="App-footer-github" />
        <img onClick={e => {window.location.href = 'mailto:contact@wagner-nicolas.com'}} src={mail} className="App-footer-mail" />
        @ 2020 RECOVER
      </footer>
    </div>
  )
}

export default Home
