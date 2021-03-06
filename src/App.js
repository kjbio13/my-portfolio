import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { GlobalStyle } from './global.styles'

import Header from './components/header/header.component'


import HomePage from './pages/homepage/homepage.component'
import DesignPage from './pages/design-page/design.component';
import DevelopmentPage from './pages/development-page/development.component';
import PersonalPage from './pages/personal-page/personal.component'
import Footer from './components/footer/footer.component'
import LoadingPage from './pages/loading-page/loading-page.component';

import './App.css'
import './styles/animations.css'
import './styles/app-personal.styles.scss'

import { ReactComponent as Circle } from './assets/circle.svg';

function App() {

  const [themeProps, setThemeProps] = useState({
    class: "",
    color1: "",
    color2: "",
    color3: "",
    textColor: "",
    borderColor: ""
  }
  )

  const [isLoading, setIsLoading] = useState(false);

  const defaultPalette = {
    class: "",
    color1: "",
    color2: "",
    color3: "",
    textColor: "",
    borderColor: ""
  }

  const rhubarbPalette = {
    class: "rhubarb",
    color1: "#F9A12EFF",
    color2: "#FC766AFF",
    color3: "#9B4A97FF",
    textColor: "#fff",
    borderColor: "#fff",
    degree: "10"
  }

  const bumblebeePalette = {
    class: "oasis",
    color1: "#FFA351FF",
    color2: "#FFBE7BFF",
    color3: "#EED971FF",
    textColor: "#000",
    borderColor: "#fff",
    degree: "10"
  }

  const pumpkinPalette = {
    class: "pumpkin",
    color1: "#E95C20FF",
    color2: "#006747FF",
    color3: "#4F2C1DFF",
    textColor: "#fff",
    borderColor: "#fff",
    degree: "13"
  }

  return (
    <div>

      <div>
        <Helmet bodyAttributes={{ style: `background-attachment: fixed; height: 100vh; background-image: linear-gradient(${themeProps.degree}deg, ${themeProps.color1} 50%, ${themeProps.color2} 50.15%` }}>

          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Helmet>
        <GlobalStyle />



        <Header {...themeProps} />
        {isLoading ? <LoadingPage /> :
          <Switch>

            <Route exact path="/" component={() => <HomePage {...themeProps} />} />
            <Route path="/design" component={() => <DesignPage {...themeProps} />} />
            <Route path="/development" component={() => <DevelopmentPage {...themeProps} />} />
            <Route path="/personal" component={() => <PersonalPage {...themeProps} />} />

          </Switch>
        }
        <div className="theme" style={{ color: `${themeProps.textColor}` }}>
          <div className="theme__title">CHOOSE A THEME:</div>
          <div className="theme__list">
            <div className="theme__list__item" onClick={() => setThemeProps(defaultPalette)}>
              <div className="theme__list__item__title">Panda</div>
              <div className="theme__list__item__circle">
                <Circle />
                <Circle fill="#fff" />
              </div>
            </div>
            <div className="theme__list__item" onClick={() => setThemeProps(rhubarbPalette)}>
              <div className="theme__list__item__title">Rhubarb</div>
              <div className="theme__list__item__circle">
                <Circle fill="#F9A12EFF" />
                <Circle fill="#FC766AFF" />
                <Circle fill="#9B4A97FF" />
              </div>
            </div>
            <div className="theme__list__item" onClick={() => setThemeProps(bumblebeePalette)}>
              <div className="theme__list__item__title">Bumblebee</div>
              <div className="theme__list__item__circle">
                <Circle fill="#FFA351FF" />
                <Circle fill="#FFBE7BFF" />
                <Circle fill="#EED971FF" />
              </div>
            </div>

            <div className="theme__list__item" onClick={() => setThemeProps(pumpkinPalette)}>
              <div className="theme__list__item__title">Pumpkin</div>
              <div className="theme__list__item__circle">
                <Circle fill="#E95C20FF" />
                <Circle fill="#006747FF" />
                <Circle fill="#4F2C1DFF" />
              </div></div>
          </div>

        </div>
        <Footer {...themeProps} />

      </div>
    </div >
  )
}

export default App;
