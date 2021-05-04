// import bot from './images/Bot.png';
// import calculator from './images/Calc.png';
// import pass from './images/Password.png';
// import rps from './images/RPS.png';
import classes from '../App.module.css';

function Project() {
    return(
        <div className={classes.ProjectView}>
          <h1> Projects </h1>
          {/* Cards */}
          <div className={classes.ProjectCards}>
            <div className={classes.FirstColumn}>
              <a href={"http://localhost:3000/"}>
								<div className={classes.TelegramBot}>
									<h3>Telegram Bot</h3>
								</div>
              </a>
              <a href={"http://localhost:3000/"}>
								<div className={classes.Calculator}>
									<h3>Calculator</h3>
								</div>
              </a>
            </div>
            <div className={classes.SecondColumn}>
              <a href={"http://localhost:3000/"}>
								<div className={classes.PassCreator}>
									<h3>Password Generator</h3>
								</div>
							</a>
              <a href={"http://localhost:3000/"}>
								<div className={classes.RockPaperScissor}>
									<h3>Rock Paper Scissors</h3>
								</div>
							</a>
            </div>            
          </div>
        </div>
    );
}
export default Project;