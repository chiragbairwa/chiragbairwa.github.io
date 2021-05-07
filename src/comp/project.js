import classes from '../App.module.css';

// Images
import RPS from '../images/RPS.svg';
import PokedexBot from '../images/pokedex.svg';
import PassCreator from '../images/password.svg';
import Calculator from '../images/calculator.svg';


function Project({id}) {
    return(
        <div className={classes.ProjectView} id={id}>
          <h1> Projects </h1>
          {/* Cards */}
          <div className={classes.ProjectCards}>
            <div className={classes.FirstColumn}>
              <a href={"https://github.com/chiragbairwa/Pokedex-Bot"} target="_blank" rel="noopener noreferrer">
								<div className={classes.PokedexBot} >
									<h3>Pokedex Bot</h3>
                  <img src={PokedexBot} alt="Pokedex" ></img>
								</div>
              </a>
              <a href={"https://github.com/chiragbairwa/Calculator-Python"} target="_blank" rel="noopener noreferrer">
								<div className={classes.Calculator}>
									<h3>Calculator</h3>
                  <img src={Calculator} alt="Calculator" ></img>
								</div>
              </a>
            </div>
            <div className={classes.SecondColumn}>
              <a href={"https://github.com/chiragbairwa/Password-Creator"} target="_blank" rel="noopener noreferrer">
								<div className={classes.PassCreator}>
									<h3>Password Creator</h3>
                  <img src={PassCreator} alt="Password Creator" ></img>
								</div>
							</a>
              <a href={"https://github.com/chiragbairwa/RPS-Game"} target="_blank" rel="noopener noreferrer">
								<div className={classes.RockPaperScissor}>
									<h3>Rock Paper Scissors</h3>
                  <img src={RPS} alt="RPS" ></img>
								</div>
							</a>
            </div>            
          </div>
        </div>
    );
}
export default Project;