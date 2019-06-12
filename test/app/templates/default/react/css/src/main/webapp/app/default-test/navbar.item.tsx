import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DefaultTest = props => (
  <NavItem>
    <NavLink tag={Link} to="/default-test" className="d-flex align-items-center">
      <FontAwesomeIcon icon="cube" />
      <span>
        DefaultTest
      </span>
    </NavLink>
  </NavItem>
);

export default DefaultTest;
