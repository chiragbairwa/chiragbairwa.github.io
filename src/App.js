import classes from './App.module.css';
import Button from 'react-bootstrap/Button';
import {PieChart} from 'react-minimal-pie-chart';
// Importing Components
import Project from './comp/project';
import Header from './comp/Header';

export default function App() {
  const CvLink = "https://docs.google.com/document/d/1wL4Ehjdug3QqX2hZ89xwo7L4lpX0w4l-8l_NilREjCM/edit?usp=sharing";
  const data = [
    { title: 'Dart', value: 10, color: '#fdc878' },
    { title: 'C/C++', value: 18, color: '#E38627' },
    { title: 'JavaScript', value: 20, color: '#C13C37' },
    { title: 'Python', value: 20, color: '#6A2135' },
  ];
  return (
    <div className="App">
      <div className={classes.Container}>
        {/* Header */}
        <Header />
              
        {/* Welcome View*/}
        <div className={classes.WelcomeView} id="WelcomeView">
          <div className={classes.WelcomeContent}>
            <div className={classes.SocialTop}>
              <div className={classes.SocialBtn}>
                <a href={"https://github.com/chiragbairwa"} target="_blank" rel="noopener noreferrer">              
                  <div className={classes.github}></div>
                </a>
                <a href={"https://linkedin.com/in/chiragbairwa"} target="_blank" rel="noopener noreferrer">              
                  <div className={classes.linkedin}></div>
                </a>
                <a href={"https://instagram.com/x.chirag_x"} target="_blank" rel="noopener noreferrer">              
                  <div className={classes.instagram}></div>
                </a>
              </div>
          </div> 
          <h1 className={classes.WelcomeMsg}>Bonjour</h1>
            <p>Hello! My name is Chirag. I am a Front-End Developer living in Chandigarh, India.</p>
          
          {/* Show Buttons */}
            <Button variant="outline-light" href={CvLink} className={classes.CvBtn} target="_blank" rel="noopener noreferrer">My Resume</Button>
          </div>
        </div>

        {/* Skills View */}
        <div className={classes.SkillView} id="SkillView">
          <h1 id="#skills" className={classes.ViewHeading}>Skills </h1>
          <div className={classes.SkillCard}>
            <div className={classes.PieChart}>         
              <PieChart id="PieChart"
                data={data}
                radius={PieChart.defaultProps.radius - 7}
                segmentsShift={(index) => (index === 2 ? 0 : 1.5)}
                label={({ dataEntry }) => dataEntry.title}
                labelStyle={{
                  fontSize: '6px',
                  fontWeight: '600',
                  color: 'white',
                }}
                // lengthAngle={360} animate
              />
            </div>
          </div>
        </div>
        
        {/* Projects View */}
        <Project id="ProjectView"/>
      
      </div>

      {/* About */}
      <div className={classes.AboutView} id="AboutView">
        <div className={classes.flex}>
          {/* Contact */}
          <div className={classes.Contact}>
            <h4>Feel free to contact me!!</h4>
            <div>
              <p>
                <a href="mailto:chiragbairwa2k18@gmail.com">chiragbairwa2k18@gmail.com</a><br></br>
                Chandigarh, India
              </p>
            </div>
          </div>
        
          {/* Social Links */}
          <div className={classes.Social}>
            <h4>Links</h4>
            <div className={classes.SocialBtn}>
              <a href={"https://github.com/chiragbairwa"} target="_blank" rel="noopener noreferrer">              
                <div className={classes.github}></div>
              </a>
              <a href={"https://linkedin.com/in/chiragbairwa"} target="_blank" rel="noopener noreferrer">              
                <div className={classes.linkedin}></div>
              </a>
              <a href={"https://instagram.com/x.chirag_x"} target="_blank" rel="noopener noreferrer">              
                <div className={classes.instagram}></div>
              </a>
            </div>
          </div> 
        </div>
        {/* Copyright */}
        <hr></hr>
        <p>© Made by Chirag With ❤️ & Sweat</p>
      </div>
      
    </div>
  );
}