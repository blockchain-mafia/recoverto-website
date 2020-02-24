import React, { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Modal from 'react-responsive-modal' // TODO: use modal to show the status of the web3 tx

import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import mail from '../assets/mail.svg'

import './buy.css'

const Buy = () => {
  const [isTop, setTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    document.addEventListener('scroll', () => { // TODO: test if a need this
      if ((window.scrollY < 30) !== isTop) {
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
          <a id="app" className="menu-item" href="https://app.recover.ws">APPLICATION</a>
          {/* FIXME: add route to add an item */}
          {/* <a id="add" className="menu-item" href="https://app.recover.ws/new/items/undefined/pk/undefined">ADD MY ITEM</a> */}
        </Menu>
      </div>
      <header className="App-header">
        Header section
      </header>
      <section className="App-section App-section-how">Buy section</section>
      <footer className="App-footer">
        <img onClick={e => {window.location.href = 'https://twitter.com/w_n1c01a5'}} src={twitter} className="App-footer-twitter" />
        <img onClick={e => {window.location.href = 'https://github.com/blockchain-mafia/recoverto-contracts'}} src={github} className="App-footer-github" />
        <img onClick={e => {window.location.href = 'mailto:contact@wagner-nicolas.com'}} src={mail} className="App-footer-mail" />
        @ 2020 RECOVER
      </footer>
    </div>
  )
}

export default Buy
