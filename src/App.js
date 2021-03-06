import classes from './App.module.css'

// Importing Components
import Welcome from './comp/welcome'
import Skill from './comp/skill'
import Project from './comp/project'

import Header from './comp/header'

export default function App() {
  return (
    <div className="App">
      <div className={classes.LandingPage}>
        {/* Header */}
        <Header />
        {/* Welcome View*/}
        <Welcome />
      </div>

      {/* Projects View */}
      <Project id="ProjectView" />

      {/* Skills View */}
      <Skill />

      {/* About */}
      <div className={classes.AboutView} id="AboutView">
        <div className={classes.flex}>
          {/* Contact */}
          <div className={classes.Contact}>
            <h4>Feel free to contact me!!</h4>
            <div>
              <p>
                <a href="mailto:chirag.dev18@gmail.com">
                  chirag.dev18@gmail.com
                </a>
                <br></br>
                Chandigarh, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className={classes.Social}>
            <h4>Links</h4>
            <div className={classes.SocialBtn}>
              <a
                href={'https://github.com/chiragbairwa'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={classes.github}></div>
              </a>
              <a
                href={'https://linkedin.com/in/chirag-bairwa'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={classes.linkedin}></div>
              </a>
              <a
                href={'https://instagram.com/hi.chirag'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={classes.instagram}></div>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <hr></hr>
        <p>© Made with ❤️ by Chirag</p>
      </div>
    </div>
  )
}
