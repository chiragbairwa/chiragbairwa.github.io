import logo from './logo.svg';
import classes from './App.css';

function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
      <nav className={classes.NavBar}>
        {/* LOGO */}
        <div>                    
          <img src={logo} alt={"Dp"}></img>
        </div>        
        
          {/* Links */}
          <div className={classes.LinkBar }>
            <a href={"http://localhost:3000/"}>Skills   </a>
            <a href={"http://localhost:3000/"}>Projects   </a>
            <a href={"http://localhost:3000/"}>About</a>
          </div>
                  
      </nav>
      
      {/* Social Links */}
        <div className={classes.SocialLinks}></div>
            
      {/* Welcome */}
      <div className={classes.WelcomeCard}>
        <div className={classes.WelcomeMsg}>
          <h1>I'm<br></br>CHIRAG,Welcome</h1>
        </div>
        
        {/* Show My Skill Button */}
          <button>My Skills</button>
        
      </div>

      {/* Skills Column */}
      <div>
        <h1> Skills </h1>
        <div className={classes.PieChart}>

        </div>
      </div>

      {/* Projects Column */}
      <div>
        <h1> Projects </h1>
        <div >
          <div className={classes.ProjectCards}> </div>
          <div className={classes.ProjectCards}> </div>
          <div className={classes.ProjectCards}> </div>
          <div className={classes.ProjectCards}> </div>
          <div className={classes.ProjectCards}> </div>
        </div>

      </div>

      {/* Social Links */}
      <div className={classes.SocialLinks}></div>

      
    </div>
  );
}

export default App;
