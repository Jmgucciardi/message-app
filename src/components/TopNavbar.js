import React from 'react';
import { Collapse, Navbar, NavbarToggler,
  NavbarBrand, Nav, NavItem, NavLink
  } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <NavbarBrand href="/">HomePage</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <Link href="/createProfile">Create Profile</Link>
              </NavItem>
              <NavItem>
              <NavLink href="https://github.com/Jmgucciardi/message-app"
                target="_blank" onClick={event => {
                event.preventDefault();
                window.open('https://github.com/Jmgucciardi/message-app');}}>
                GitHub
              </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool,
  tag: PropTypes.oneOfType([ PropTypes.func, PropTypes.string ])
  // pass in custom element to use
};
