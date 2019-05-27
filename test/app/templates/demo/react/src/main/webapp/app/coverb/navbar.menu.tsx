import React from 'react';
import { DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from 'app/shared/layout/header/header-components';
// jhipster-needle-add-import-to-menu - JHipster will add entities to the menu here

const NavDropdown = props => (
  <UncontrolledDropdown nav inNavbar id={props.id}>
    <DropdownToggle nav caret className="d-flex align-items-center">
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.name}</span>
    </DropdownToggle>
    <DropdownMenu right style={props.style}>
      {props.children}
    </DropdownMenu>
  </UncontrolledDropdown>
);

const Coverb = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="cubes" name="Coverb" id="coverb-menu">
    <DropdownItem tag={Link} to="/coverb/default">
      <FontAwesomeIcon icon="cube" />
      &nbsp;Default
    </DropdownItem>
    <DropdownItem tag={Link} to="/coverb/resume">
      <FontAwesomeIcon icon="cube" />
      &nbsp;Resume
    </DropdownItem>
    <DropdownItem tag={Link} to="/coverb/company">
      <FontAwesomeIcon icon="cube" />
      &nbsp;Company
    </DropdownItem>
    {/* jhipster-needle-add-item-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);

export default Coverb;
