import React, { Component } from 'react';
import logo from '../logo.svg';
import { Grid, Row, Col } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import HeaderNavbar from './header/header';
import Sidebar from './sidebar/sidebar';
import HousesList from '../Houses/containers/houses-lists';
import HousesListDropdown from '../Houses/containers/houses-lists-dropdown';

import './App.css';

const App = () => (
  <div>
      <HeaderNavbar />
      <div style={{'paddingTop':'65px'}}>
        <Grid>
          <Row>
            <Col xs={6} md={8}>
                <h2>Game of Thrones Houses Wikia</h2>
                <hr />
                <HousesList />
            </Col>
             <Col xs={6} md={4} className="">
                <div>
                  <Sidebar />
                </div>
            </Col>
          </Row>
        </Grid>
      </div>
  </div>
);
export default App;
