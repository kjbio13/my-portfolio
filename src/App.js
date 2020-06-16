import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { GlobalStyle } from './global.styles'

import Header from './components/header/header.component'


import HomePage from './pages/homepage/homepage.component'
import DesignPage from './pages/design-page/design.component';
import DevelopmentPage from './pages/development-page/development.component';
import PersonalPage from './pages/personal-page/personal.component'

const App = () => {

  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Helmet>
      <GlobalStyle />

      <Header />

      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route path="/design" component={DesignPage} />
        <Route exact path="/development" component={DevelopmentPage} />
        <Route path="/personal" component={PersonalPage} />

      </Switch>


    </div>
  )
}

export default App;
