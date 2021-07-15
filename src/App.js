import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap'
import Menu from './components/menu'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      var: "",
      hidden: false,
    }
  }
  componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <div className="body-container">
        <div className="menu-container">
          <Menu></Menu>
        </div>
        <div className="content-container">
          <h1>Content</h1>
          <div className="menu-one-container" style={{ height: '2000px' }}>
          <Container>
          <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
          </Container>
          </div>
          <div className="menu-two-container">menu 2</div>
          <div className="menu-three-container">menu 3</div>
        </div>
        <div className="footer-container">
          footer
        </div>
      </div>
    );
  }
}
