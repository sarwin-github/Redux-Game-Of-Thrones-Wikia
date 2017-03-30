import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, FormGroup, Button, FormControl } from 'react-bootstrap';
import HousesListDropdown from '../../Houses/containers/houses-lists-dropdown';
import { Link } from 'react-router';

class HeaderNavigation extends Component{
    render(){
      return(
         <Navbar className="navbar-inverse navbar-fixed-top" >
            <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Game of Thrones</Link>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1}><Link to="/home">Home</Link></NavItem>
              <NavItem eventKey={2}><Link to="/character">Characters</Link></NavItem>
              <NavDropdown eventKey={3} id="basic-nav-dropdown" title="Houses">   
              <Link to="/Houses" className="text-center">View All Houses</Link>
                  <HousesListDropdown />
              </NavDropdown>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              {' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
        </Navbar>
      );
    }
}

export default HeaderNavigation;
 