// Modules
import { useEffect } from 'react'
import classes from '../App.module.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Link from 'react-scroll/modules/components/Link'

import logo from '../images/dp.png'

export default function Header() {
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById('header').style.backgroundColor = '#00101b'
        document.getElementById('header').style.paddingTop = '0'
        document.getElementById('header').style.opacity = '0.9'
        document.getElementById('header').style.borderRadius = '50px'
      } else {
        document.getElementById('header').style.backgroundColor = 'transparent'
        document.getElementById('header').style.paddingTop = '20px'
        document.getElementById('header').style.opacity = '1'
      }
    }
  }, [])

  return (
    <div className={classes.Header} id="header">
      <a href="https://chiragbairwa.codes">
        <img src={logo} alt={'Dp'} className={classes.Dp} id="Dp" />
      </a>
      {/* Nav Bar */}
      <nav className={classes.NavBar}>
        <Link
          id="SkillBtn"
          to="SkillView"
          smooth={true}
          offset={-60}
          duration={500}
        >
          <button type="button" className="btn btn-outline-light ">
            Skills
          </button>
        </Link>
        <Link
          id="ProjectBtn"
          to="ProjectView"
          smooth={true}
          offset={-60}
          duration={500}
        >
          <button type="button" className=" btn btn-outline-light ">
            Projects
          </button>
        </Link>
        <Link id="AboutBtn" to="AboutView" smooth={true} duration={500}>
          <button type="button" className="btn btn-outline-light ">
            About
          </button>
        </Link>
      </nav>

      {/* Mobile NavBar */}
      <nav className={classes.NavBarMob}>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
          ></Dropdown.Toggle>

          <Dropdown.Menu variant="light" className={classes.Dropdown}>
            <Link to="SkillView" smooth={true} offset={-60} duration={500}>
              Skills
            </Link>
            <Link to="ProjectView" smooth={true} offset={-80} duration={500}>
              Projects
            </Link>
            <Link to="AboutView" smooth={true} duration={500}>
              About
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  )
}
