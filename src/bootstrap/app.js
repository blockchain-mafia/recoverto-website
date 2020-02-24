import React from 'react'
import loadable from '@loadable/component'
import { Router } from '@reach/router'
import { BeatLoader } from 'react-spinners'
// import { slide as Menu } from 'react-burger-menu' // TODO: add menu here

import { register } from './service-worker'

const Main = ({ children }) => (
  <main>{children}</main>
)

const Home = loadable(
  () => import(/* webpackPrefetch: true */ '../containers/home'),
  {
    fallback: (
      <div>
        <BeatLoader color={'#fff'} />
      </div>
    )
  }
)

const Buy = loadable(
  () => import(/* webpackPrefetch: true */ '../containers/buy'),
  {
    fallback: (
      <div>
        <BeatLoader color={'#fff'} />
      </div>
    )
  }
)

// TODO: add a 404 page
// const C404 = loadable(
//   () => import(/* webpackPrefetch: true */ '../containers/404'),
//   {
//     fallback: (
//       <div>
//         <BeatLoader color={'#fff'} />
//       </div>
//     )
//   }
// )

export default () => (
  <>
    <Router>
      <Main path="/">
        <Home path="/" />
        <Buy path="/buy" />
        {/* <C404 default /> TODO: add a 404 page */}
      </Main>
    </Router>
  </>
)

register({
  onUpdate: () => (
    <p>An update is ready to be installed. Please restart the application.</p>
  )
})