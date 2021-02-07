import React, { Component } from 'react';
import { default as Header } from '../componenets/Header';
import { default as Footer } from '../componenets/Footer';
import '../styles.css';
import { Link } from 'react-router-dom';
import {
  Jumbotron,
  Container,
  Button
} from 'react-bootstrap';
import PropTypes from 'prop-types';



export default class HomePage extends Component {
  static propTypes = {
    history: PropTypes.object,
  };
  
  render() {
    return(
      <div className="home">
        <Header />

        <section>
          <Jumbotron>
            <Container>
              <h1>Welcome to Chatty</h1>
              <p className="lead">A great place to share your thoughts with friends </p>
              
             <Button 
              onClick={ () => { this.props.history.replace('/signup') } }
              variant="primary"
             >
               Sign up
             </Button>

             <Button 
              onClick={ () => { this.props.history.replace('/login') } }
              variant="secondary"
             >
               Log in
             </Button>
            </Container>
          </Jumbotron>
        </section>
        <Footer />
      </div>

    )
  }
}