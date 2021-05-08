// Modules
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'react-scroll/modules/components/Link';
import classes from '../App.module.css';

import logo from '../images/dp.png';

export default function TopBar(){
	return(
    <div className={classes.TopBar}>
      <img src={logo} alt={"Dp"} className={classes.Dp} />
      
      {/* Nav Bar */}
      <nav className={classes.NavBar}>
        <Link to="SkillView" smooth={true} offset={-70} duration={500} >
          <Button variant="outline-primary" >Skills</Button>
        </Link>
        <Link to="ProjectView" smooth={true} offset={-70} duration={500} >
          <Button variant="outline-primary" >Projects</Button>
        </Link>
				<Link to="AboutView" smooth={true} duration={500} >
          <Button variant="outline-primary" >About</Button>
        </Link>
				
			</nav>

      {/* Mobile NavBar */}
      <nav className={classes.NavBarMob}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu variant="primary" className={classes.Dropdown}>
              <Link to="SkillView" smooth={true} offset={-70} duration={500} >
                Skills
              </Link>
              <Link to="ProjectView" smooth={true} offset={-70} duration={500} >
                Projects
              </Link>
              <Link to="AboutView" smooth={true} duration={500} >
                About
              </Link>
            </Dropdown.Menu>
          </Dropdown>
      </nav>
    </div>
	);
}
