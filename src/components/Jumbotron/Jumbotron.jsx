import React, { Component } from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import './Jumbotron.css'

export default class Summary extends Component {
    render(){
        return(
            <Container>
                <Jumbotron className="wrapper">
                    <h1>Welcome to Clicky Game</h1>
                    <p>
                        Test your memory by not clicking on the same image twice!
                    </p>
                </Jumbotron>
            </Container>
        );
    }
}