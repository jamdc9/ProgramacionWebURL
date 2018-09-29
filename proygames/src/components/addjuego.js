//import the necessary files
import React from 'react';
import { Modal, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';

//create a class for displaying the modal for adding a new recipe and export it
export class AddJuego extends React.Component {
    constructor(props) {//create a state to handle the new recipe
        super(props);
        this.state = { name: "", consolas: "", comentario: "", avatar: "" };
        this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
        this.handleRecipeConsolasChange = this.handleRecipeConsolasChange.bind(this);
        this.handleRecipeComentarioChange = this.handleRecipeComentarioChange.bind(this);
        this.handleRecipeAvatarChange = this.handleRecipeAvatarChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleRecipeNameChange(e) {//change the name to reflect user input
        this.setState({ name: e.target.value });
    }
    handleRecipeConsolasChange(e) {//change the ingredients to reflect user input
        this.setState({ consolas: e.target.value });
    }
    handleRecipeComentarioChange(e) {//change the ingredients to reflect user input
        this.setState({ comentario: e.target.value });
    }
    handleRecipeAvatarChange(e) {//change the ingredients to reflect user input
        this.setState({ avatar: e.target.value });
    }
    handleSubmit(e) {//get the recipe data, manipulate it and call the function for creating a new recipe
        e.preventDefault();
        const onAdd = this.props.onAdd;
        const regExp = /\s*,\s*/;
        var newName = this.state.name;
        var newConsolas = this.state.consolas.split(regExp);
        var newComentario = this.state.comentario;
        var newAvatar = this.state.avatar;

        var newJuego = { name: newName, consolas: newConsolas, comentario: newComentario, avatar: newAvatar };
        onAdd(newJuego);
        this.setState({ name: "", consolas: "", comentario: "", avatar: "" });
    }
    handleCancel() {
        const onAddModal = this.props.onAddModal;
        this.setState({ name: "", consolas: "", comentario: "", avatar: "" });
        onAddModal();
    }
    render() {
        const onShow = this.props.onShow;
        var regex1 = /^\S/;
        var regex2 = /^[^,\s]/;
        var regex3 = /[^,\s]$/;
        const validJuego = regex1.test(this.state.name) && regex2.test(this.state.consolas)
            && regex3.test(this.state.consolas) && regex1.test(this.state.comentario)
            && regex1.test(this.state.avatar);
        return (
            <div >

                <Modal show={onShow} onHide={this.handleCancel} animation={false}>

                    <Modal.Header closeButton>
                        <Modal.Title>Agregar Juego</Modal.Title >
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="formControlsName">
                            <ControlLabel>Nombre del Juego</ControlLabel>
                            <FormControl type="text" required onChange={this.handleRecipeNameChange} value={this.state.name} placeholder="Enter Name" />
                        </FormGroup>
                        <FormGroup controlId="formControlsConsolas">
                            <ControlLabel>Consolas</ControlLabel>
                            <FormControl componentClass="textarea" type="text" required onChange={this.handleRecipeConsolasChange} value={this.state.consolas} placeholder="Ingrese los valores separados por COMA" />
                        </FormGroup>
                        <FormGroup controlId="formControlsComentario">
                            <ControlLabel>Comentario</ControlLabel>
                            <FormControl type="text" required onChange={this.handleRecipeComentarioChange} value={this.state.comentario} placeholder="Ingrese Comentario" />
                        </FormGroup>
                        <FormGroup controlId="formControlsFoto">
                            <ControlLabel>Foto URL</ControlLabel>
                            <FormControl type="text" required onChange={this.handleRecipeAvatarChange} value={this.state.avatar} placeholder="Ingrese URL de imagen" />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button disabled={!validJuego} bsStyle="success" onClick={this.handleSubmit}>Guardar Juego</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};