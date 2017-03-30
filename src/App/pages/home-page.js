import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderNavbar from '../header/header';

class HomePage extends Component{
    render(){
      return(
        <div>
          <HeaderNavbar />
        <div style={{'paddingTop':'65px'}}>
          <Grid>
            <Row>
              <Col xs={12} md={8}>
                <h2>Game of Thrones Wikia</h2>
              <hr />
              </Col>
            </Row>
          </Grid>
        </div>
        </div>
      );
    }
}

export default HomePage;