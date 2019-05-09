import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import Summary from './components/Jumbotron/Jumbotron';
import Cards from './components/Cards/Cards';
import character from "./characters.json";

class App extends Component {

    state = {
      character,
      userChoice: [],
      score: 0
    };

      imageClick = event => {
        const pictureChosen = event.target.alt;
        const characterAlreadyClicked =
          this.state.userChoice.indexOf(pictureChosen) > -1;

        if (characterAlreadyClicked) {
          this.setState({
            character: this.state.character.sort(function() {
              return 0.5 - Math.random();
            }),
            userChoice: [],
            score: 0
          });
            alert("You've lost. Would you like to play again?");

        } else {
          this.setState(
            {
              character: this.state.character.sort(function() {
                return 0.5 - Math.random();
              }),
              userChoice: this.state.userChoice.concat(
                pictureChosen
              ),
              score: this.state.score + 1
            },
            () => {
              if (this.state.score === 12) {
                alert("You've won the game. Congratulations!");
                this.setState({
                  character: this.state.character.sort(function() {
                    return 0.5 - Math.random();
                  }),
                  userChoice: [],
                  score: 0
                });
              }
            }
          );
        }
      };

  render(){
    return(
        <div>
          <Navbar
            score={this.state.score}
          />
          <br/>
          <Summary/> 
          <br/>
          <div className="wrapper">
            {this.state.character.map(character => (
              <Cards
                imageClick={this.imageClick}
                id={character.id}
                key={character.id}
                image={character.image}
              />
            ))}
          </div>
        </div>
    );
  }  
}

export default App;
