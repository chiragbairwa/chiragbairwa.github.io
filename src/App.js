import logo from './logo.svg';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <div className={classes.Container}>
        <div className={classes.TopBar}>
          <img src={logo} alt={"Dp"} />

          {/* Nav Bar */}
          <nav className={classes.NavBar}>   
            <a href={"http://localhost:3000/"}>Skills</a>
            <a href={"http://localhost:3000/"}>Projects</a>
            <a href={"http://localhost:3000/"}>About</a>
          </nav>
        </div>
              
        {/* Welcome */}
        <div className={classes.WelcomeView}>
          <div className={classes.WelcomeMsg}>
            <h1>I'm<br></br>CHIRAG,Welcome</h1>
          </div>
          
          {/* Show My Skill Button */}
            <button className={classes.SkillBtn}>My Skills</button>
          
        </div>

        {/* Skills Column */}
        <div className={classes.SkillView}>
          <h1> Skills </h1>
          <div className={classes.PieChart}>
          </div>
        </div>

        {/* Projects Column */}
        <div className={classes.ProjectView}>
          <h1> Projects </h1>

          {/* Cards */}
          <div className={classes.ProjectCards}>
            <div> <p>Lorem</p> </div>
            <div> <p>Lorem</p> </div>
          </div>
        </div>

        {/* Social Links */}
        <div className={classes.SocialLinks}>
        </div>        
      </div>
    </div>
  );
}

export default App;
