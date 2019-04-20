import React, { useState, useEffect } from 'react'
import { slide as Menu } from 'react-burger-menu'
import TextLoop from 'react-text-loop'

import './App.css'

const App = () => {
  const [isTop, setTop] = useState(true)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY < 24 !== isTop) {
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
      <section className='first'>
      The problem is that sometimes it works while other times it doesn’t. When it does work, the element sticks, but in other parts of the scrolling it stops sticking. As someone who eats and breaths CSS daily, it was unacceptable for me to not understand the issue to its root , so I decided to thoroughly explore Position Sticky.

The Sticky Exploration
While playing with it, I quickly noticed that when an element with a position: sticky style is wrapped, and it is the only element inside the wrapper element, this element, which was defined position: sticky will not stick.

The problem is that sometimes it works while other times it doesn’t. When it does work, the element sticks, but in other parts of the scrolling it stops sticking. As someone who eats and breaths CSS daily, it was unacceptable for me to not understand the issue to its root , so I decided to thoroughly explore Position Sticky.

The Sticky Exploration
While playing with it, I quickly noticed that when an element with a position: sticky style is wrapped, and it is the only element inside the wrapper element, this element, which was defined position: sticky will not stick.

The problem is that sometimes it works while other times it doesn’t. When it does work, the element sticks, but in other parts of the scrolling it stops sticking. As someone who eats and breaths CSS daily, it was unacceptable for me to not understand the issue to its root , so I decided to thoroughly explore Position Sticky.

The Sticky Exploration
While playing with it, I quickly noticed that when an element with a position: sticky style is wrapped, and it is the only element inside the wrapper element, this element, which was defined position: sticky will not stick.
      </section>
      <section style={{background: 'red'}}>
      The problem is that sometimes it works while other times it doesn’t. When it does work, the element sticks, but in other parts of the scrolling it stops sticking. As someone who eats and breaths CSS daily, it was unacceptable for me to not understand the issue to its root , so I decided to thoroughly explore Position Sticky.

The Sticky Exploration
While playing with it, I quickly noticed that when an element with a position: sticky style is wrapped, and it is the only element inside the wrapper element, this element, which was defined position: sticky will not stick.

The problem is that sometimes it works while other times it doesn’t. When it does work, the element sticks, but in other parts of the scrolling it stops sticking. As someone who eats and breaths CSS daily, it was unacceptable for me to not understand the issue to its root , so I decided to thoroughly explore Position Sticky.

The Sticky Exploration
While playing with it, I quickly noticed that when an element with a position: sticky style is wrapped, and it is the only element inside the wrapper element, this element, which was defined position: sticky will not stick.

The problem is that sometimes it works while other times it doesn’t. When it does work, the element sticks, but in other parts of the scrolling it stops sticking. As someone who eats and breaths CSS daily, it was unacceptable for me to not understand the issue to its root , so I decided to thoroughly explore Position Sticky.

The Sticky Exploration
While playing with it, I quickly noticed that when an element with a position: sticky style is wrapped, and it is the only element inside the wrapper element, this element, which was defined position: sticky will not stick.
      </section>
    </div>
  )
}

export default App
