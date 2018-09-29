import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PanelGroup, Panel, Button, ButtonToolbar, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import { CardGroup, CardTitle, CardText } from 'reactstrap';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from "react-simple-card";
class VideoGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            juegos: [
                { name: "Spiderman", consolas: ["PS2", "PS3", "PS4"], comentario: ["Sin jugarlo."], avatar: "https://img.game.co.uk/ml2/5/6/2/9/562944_scr9_a.png" },
                { name: "God of War", consolas: ["PS3", "PS4", "PSVita"], comentario: ["Muy buen juego."], avatar: "https://i.blogs.es/7548d0/god-of-war-2018-gameinformer/450_1000.jpg" },
                { name: "Pokemon", consolas: ["Game Boy Color", "Game Boy Advance", "Nintendo Game Cube", "Nintendo Wii"], comentario: ["Buenos Juegos"], avatar: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/gamecube_12/SI_GCN_PokemonColosseum_image1600w.jpg" },
                { name: "Sonic", consolas: ["Sega", "Nintendo(s)"], comentario: ["Infancia pura"], avatar: "https://c.slashgear.com/wp-content/uploads/2017/08/Sonic-Mania-green-hill-1-980x620.jpg" },
                { name: "Mario Sunshine", consolas: ["Nintendo Game Cube"], comentario: ["El mejor de Mario"], avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaF3aV8CzgtAjdgEjIGH6fPDgr6IsaqY1lRQ033Xze7OR9mz5" },
                { name: "Age of Empires 2", consolas: ["PC"], comentario: ["Un clasico"], avatar: "https://i.ytimg.com/vi/Si6QPKiNoDY/maxresdefault.jpg" },
                { name: "Mario Kart", consolas: ["Todas las consolas de Nintendo despues del NES"], comentario: ["Pierde Amigos"], avatar: "https://vignette.wikia.nocookie.net/mariokart/images/7/7e/Mario-kart-double-dash-1.jpg/revision/latest?cb=20140521140749&path-prefix=es" }
            ]
        };
    }
    render() {
        const juegos = this.state.juegos;
        return (
            <div className="jumbotron">
                <h1>Juegos (actualmente solo muestra)</h1>
                <div id="juegos" className="text-center">
                    <div className="row">
                        {juegos.map((juego, index) => (
                            <Card key={index} className="col-md-6">
                                <CardBody>
                                    <ImageHeader imageSrc={juego.avatar} data-toggle="tooltip" data-placement="bottom" title={juego.comentario} />
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
                </div>
                <Button bsStyle="primary">Agregar Juegos</Button>
            </div>
        );
    }
};
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
ReactDOM.render(<VideoGames />, document.getElementById('app'));
