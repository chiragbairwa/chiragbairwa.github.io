// Modules
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Link from 'react-scroll/modules/components/Link'
import classes from '../App.module.css'

import logo from '../images/dp.png'

export default function Header() {
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById('header').style.backgroundColor = 'black'
        document.getElementById('header').style.paddingTop = '0'
        document.getElementById('header').style.opacity = '0.99'
      } else {
        document.getElementById('header').style.backgroundColor = 'transparent'
        document.getElementById('header').style.paddingTop = '20px'
        document.getElementById('header').style.opacity = '1'
      }
    }
  }, [])

  return (
    <div className={classes.Header} id="header">
      <img src={logo} alt={'Dp'} className={classes.Dp} />
      {/* Nav Bar */}
      <nav className={classes.NavBar}>
        <Link
          id="SkillBtn"
          to="SkillView"
          smooth={true}
          offset={-60}
          duration={500}
        >
          <Button variant="outline-light">Skills</Button>
        </Link>
        <Link
          id="ProjectBtn"
          to="ProjectView"
          smooth={true}
          offset={-60}
          duration={500}
        >
          <Button variant="outline-light">Projects</Button>
        </Link>
        <Link id="AboutBtn" to="AboutView" smooth={true} duration={500}>
          <Button variant="outline-light">About</Button>
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
            <Link to="SkillView" smooth={true} offset={-80} duration={500}>
              Skills
            </Link>
            <Link to="ProjectView" smooth={true} offset={-70} duration={500}>
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
