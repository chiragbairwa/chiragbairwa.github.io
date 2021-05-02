import logo from './images/logo.svg';
import bot from './images/Bot.png';
import calculator from './images/Calc.png';
import pass from './images/Password.png';
import rps from './images/RPS.png';
import classes from './App.module.css';
import { PieChart} from 'react-minimal-pie-chart';

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
              
        {/* Welcome View*/}
        <div className={classes.WelcomeView}>
          <div className={classes.WelcomeMsg}>
            <h1>Hey I'm<br></br>CHIRAG, Welcome</h1>
          </div>
          
          {/* Show Buttons */}
          <div className={classes.WelcomeBtn}>
            <button className={classes.SkillBtn}>My Skills</button>  
            <button className={classes.SkillBtn}>My Cv</button>    
          </div>    
        </div>

        {/* Skills View */}
        <div className={classes.SkillView}>
          <h1> Skills </h1>
          
          <div className={classes.SkillCard}>
            <div className={classes.PieChart}>         
              <PieChart
                data={[
                  { title: 'C++', value: 10, color: '#E38627' },
                  { title: 'ReactJs', value: 15, color: '#C13C37' },
                  { title: 'Python', value: 20, color: '#6A2135' },
                ]}
              />
            </div>
          </div>
        </div>
        {/* Projects View */}
        <div className={classes.ProjectView}>
          <h1> Projects </h1>
          {/* Cards */}
          <div className={classes.ProjectCards}>
            <div className={classes.FirstRow}>
              <a href={"http://localhost:3000/"}></a>
              <a href={"http://localhost:3000/"}></a>
            </div>
            <div className={classes.SecondRow}>
              <a href={"http://localhost:3000/"} ></a>
              <a href={"http://localhost:3000/"}></a>
            </div>            
          </div>
        </div>

        {/* Social Links */}
        {/* <div className={classes.SocialLinks}>
          <p>Lor</p>
          <p>Lor</p>
          </div>  */}      
      </div>

      {/* About */}
      <div className={classes.AboutView}>
        <h2>About</h2>
      </div>
    </div>
  );
}

export default App;
