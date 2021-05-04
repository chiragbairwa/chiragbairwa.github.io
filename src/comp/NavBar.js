import logo from '../images/logo.svg';
import classes from '../App.module.css';

export function TopBar(){
	return(
    <div className={classes.TopBar}>
      <img src={logo} alt={"Dp"} />

      {/* Nav Bar */}
      <nav className={classes.NavBar}> 
				<a href={"http://localhost:3000/"}>Skills</a>
				<a href={"http://localhost:3000/"}>Projects</a>
				<a href={"http://localhost:3000/"}>About</a>
			</nav>
    </div>	
	);
}
// export default function NavBar_Mobile(){
//   return(
// 		true
// 	);
// }
