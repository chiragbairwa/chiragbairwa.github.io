import classes from './App.module.css';
import { PieChart} from 'react-minimal-pie-chart';
// Importing Components
import Project from './comp/project';
import {TopBar} from './comp/NavBar';

function App() {
  return (
    <div className="App">
      <div className={classes.Container}>
        {/* TopBar */}
        <TopBar />
              
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
        <Project />

        {/* Social Links */}
        {/* <div className={classes.SocialLinks}>
          <p>Lor</p>
          <p>Lor</p>
          </div>  */}      
      </div>

      {/* About */}
      <div className={classes.AboutView}>
        <div className={classes.flex}>
        {/* Social Links */}
        <div className={classes.Social}>
          <h3>Links :-</h3>
          <div className={classes.SocialBtn}>
            <a href={"http://localhost:3000/"}>              
              <div className={classes.github}></div>
            </a>
            <a href={"http://localhost:3000/"}>              
              <div className={classes.github}></div>
            </a>
            <a href={"http://localhost:3000/"}>              
              <div className={classes.github}></div>
            </a>
            <a href={"http://localhost:3000/"}>              
              <div className={classes.github}></div>
            </a>
          </div>
        </div> 
        
      {/* Contact */}
        <div className={classes.Contact}>
          <h3>Contact</h3>
          <div>
            <h5>chirag@mail</h5>
            <h5>Chandigarh, India</h5>
            <h5>9988776655</h5>
          </div>
        </div>
        </div>
        {/* Copyright */}
        <hr></hr>
        © Made by Chirag
      </div>
      
    </div>
  );
}

export default App;
