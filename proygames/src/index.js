import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PanelGroup, Panel, Button, ButtonToolbar, ListGroup, ListGroupItem } from 'react-bootstrap';
import { CardGroup, Card, CardBody, CardTitle, CardText } from 'reactstrap';

class VideoGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            juegos: [
                { name: "Spiderman", consolas: ["PS2", "PS3", "PS4"], comentario: ["Sin jugarlo."] },
                { name: "God of War", consolas: ["PS3", "PS4", "PSVita"], comentario: ["Muy buen juego."] },
                { name: "Pokemon", consolas: ["Game Boy Color", "Game Boy Advance", "Nintendo Game Cube", "Nintendo Wii"], comentario: ["Buenos Juegos"] },
                { name: "Sonic", consolas: ["Sega", "Nintendo(s)"], comentario: ["Infancia pura"] },
                { name: "Mario Sunshine", consolas: ["Nintendo Game Cube"], comentario: ["El mejor de Mario"] },
                { name: "Age of Empires 2", consolas: ["PC"], comentario: ["Un clasico"] },
                { name: "Mario Kart", consolas: ["Nintendos"], comentario: ["Pierde Amigos"] }
            ]
        };
    }
    render() {
        const juegos = this.state.juegos;
        return (
            <div className="jumbotron">
                <h1>Juegos (actualmente solo muestra)</h1>
                <div id="juegos">
                    {juegos.map((juego, index) => (
                        <Card key={index} className="col-md-6">
                            
                            <CardBody>
                                <CardTitle className="title" data-toggle="tooltip" data-placement="bottom" title={juego.comentario}>{juego.name}</CardTitle>
                                <CardText>
                                    {juego.consolas.map((consola, index) => (
                                        <ListGroupItem key={index} >{consola}</ListGroupItem>
                                    ))}
                                </CardText>
                                <ButtonToolbar>
                                    <Button bsStyle="warning">Edit</Button>
                                    <Button bsStyle="danger">Delete</Button>
                                </ButtonToolbar>
                            </CardBody>

                        </Card>
                    ))}
                </div>
                <Button bsStyle="primary">Agregar Juegos</Button>
            </div>
        );
    }
};
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
ReactDOM.render(<VideoGames />, document.getElementById('app'));
