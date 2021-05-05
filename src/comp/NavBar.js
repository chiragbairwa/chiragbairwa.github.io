import logo from '../images/dp.png';
import classes from '../App.module.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export default function TopBar(){
	return(
    <div className={classes.TopBar}>
      <img src={logo} alt={"Dp"} className={classes.Dp} />
      
      {/* Nav Bar */}
      <nav className={classes.NavBar}> 
				{/* <Button variant="outline-primary" href="#"></Button> */}
        <Button variant="outline-primary" href="#Skills">Skills</Button>
				<Button variant="outline-primary" href="http://localhost:3000/#Projects">Projects</Button>
				<Button variant="outline-primary" href="#About">About</Button>
			</nav>

      {/* Mobile NavBar */}
      <nav className={classes.NavBarMob}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu variant="secondary">
              <Dropdown.Item href="#Skills">Skills</Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/#Projects">Projects</Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/#About">About</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </nav>
    </div>
	);
}
