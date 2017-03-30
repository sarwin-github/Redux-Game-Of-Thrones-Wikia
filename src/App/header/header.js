import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, FormGroup, Button, FormControl } from 'react-bootstrap';
import HousesListDropdown from '../../Houses/containers/houses-lists-dropdown';

class HeaderNavigation extends Component{
    render(){
      return(
         <Navbar className="navbar-inverse navbar-fixed-top" >
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Game of Thrones</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">Home</NavItem>
              <NavItem eventKey={2} href="#">Characters</NavItem>
              <NavDropdown eventKey={3} title="Houses" id="basic-nav-dropdown">
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
 