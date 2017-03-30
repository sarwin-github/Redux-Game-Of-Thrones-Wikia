import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CharacterLists from '../../Characters/containers/character-lists';
import HeaderNavbar from '../header/header';

class HousesPageData extends Component{
    render(){
      return(
        <div>
          <HeaderNavbar />
        <div style={{'paddingTop':'65px'}}>
          <Grid>
            <Row>
              <Col xs={12} md={8}>
                <h2>Game of Thrones Characters</h2>
              <hr />
               <CharacterLists />
              </Col>
            </Row>
          </Grid>
        </div>
        </div>
      );
    }
}

export default HousesPageData;