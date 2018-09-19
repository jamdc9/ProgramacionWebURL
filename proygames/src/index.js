import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';

class VideoGames extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        juegos: [
          {name: "Spiderman", consolas: ["PS2", "PS3", "PS4"]},
          {name: "God of War", consolas: ["PS3", "PS4", "PSVita"]},
          {name: "Pokemon", consolas: ["Game Boy Color" , "Game Boy Advance", "Nintendo Game Cube", "Nintendo Wii"]},
          {name: "Sonic", consolas: ["Sega", "Nintendo(s)"]},
          {name: "Mario Sunshine", consolas: ["Nintendo Game Cube"]},
          {name: "Age of Empires 2", consolas: ["PC"]},
          {name: "Mario Kart", consolas: ["NIntendos"]}
        ]
      };
    }
render() {
    const juegos = this.state.juegos;
    return(
    <div className="jumbotron">
        <h1>Juegos</h1>
        <PanelGroup accordion id="juegos">
        {juegos.map((juego, index) => (
            <Panel eventKey={index} key={index}>
            <Panel.Heading>
                <Panel.Title className="title" toggle>{juego.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
                <ListGroup>
                {juego.consolas.map((consola, index) => (
                    <ListGroupItem key={index}>{consola}</ListGroupItem>
                ))}
                </ListGroup>
                <ButtonToolbar>
                <Button bsStyle="warning">Edit</Button>
                <Button bsStyle="danger">Delete</Button>
                </ButtonToolbar>
            </Panel.Body>
            </Panel>
        ))}
        </PanelGroup>
        <Button bsStyle="primary">Agregar Juegos</Button>
    </div>
    );
}
};
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
ReactDOM.render(<VideoGames />, document.getElementById('app'));
