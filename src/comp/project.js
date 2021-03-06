import classes from './project.module.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

// Images
import RPS from '../images/RPS.png'
import PokedexBot from '../images/pokedex.svg'
import PassCreator from '../images/password.svg'
import Calculator from '../images/calculator.svg'
import { useEffect } from 'react'

function Project({ id }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className={classes.ProjectView} id={id}>
      <h1 className={classes.ViewHeading}>My Projects </h1>
      {/* Cards */}
      <div className={classes.ProjectCards}>
        <div className={classes.Column}>
          <a
            href={'https://t.me/PocketMonsterBot'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade-up" className={classes.PokedexBot}>
              <p>Pokedex Bot</p>
              <img src={PokedexBot} alt="Pokedex"></img>
            </div>
          </a>
          <a
            href={'https://github.com/chiragbairwa/Calculator-Python'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade-up" className={classes.Calculator}>
              <p>Calculator</p>
              <img src={Calculator} alt="Calculator"></img>
            </div>
          </a>
        </div>
        <div className={classes.Column}>
          <a
            href={'https://github.com/chiragbairwa/Password-Creator'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade-up" className={classes.PassCreator}>
              <p>Password Creator</p>
              <img src={PassCreator} alt="Password Creator"></img>
            </div>
          </a>
          <a
            href={'https://github.com/chiragbairwa/RPS-Game'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div data-aos="fade-up" className={classes.RockPaperScissor}>
              <p>Rock Paper Scissors</p>
              <img src={RPS} alt="RPS"></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Project
