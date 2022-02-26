import classes from '../App.module.css'
import Typewriter from 'typewriter-effect'
import BlogImage from '../images/blogging.png'

export default function welcome() {
  const CvLink =
    'https://docs.google.com/document/d/1wL4Ehjdug3QqX2hZ89xwo7L4lpX0w4l-8l_NilREjCM/edit?usp=sharing'
  return (
    <div className={classes.WelcomeView} id="WelcomeView">
      <div className={classes.WelcomeContent}>
        <img src={BlogImage} alt="Blog Illustration" width="550" />
        <div className={classes.SocialTop}>
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

        <div className={classes.WelcomeMsg}>
          <h2>Hi,</h2>
          <h1>I'm Chirag,</h1>
          <Typewriter
            options={{
              strings: ['Web Developer.', 'Student.', 'App Developer.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Show Buttons */}
        <a href={CvLink} target="_blank" rel="noopener noreferrer">
          <button className={classes.CvButton}>My Resume</button>
        </a>
      </div>
    </div>
  )
}
