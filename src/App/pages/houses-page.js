import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import HousesList from '../../Houses/containers/houses-lists';
import Sidebar from '../sidebar/sidebar';

class HousesPageData extends Component{
    render(){
      return(
         <Grid>
           <Row>
             <Col xs={12} md={8}>
               <h2>Game of Thrones Houses Wikia</h2>
             <hr />
             <HousesList />
             </Col>
             <Col md={4} className="hidden-xs visible-sm visible-md visible-lg">
               <div>
                 <Sidebar />
               </div>
             </Col>
           </Row>
         </Grid>
      );
    }
}

export default HousesPageData;