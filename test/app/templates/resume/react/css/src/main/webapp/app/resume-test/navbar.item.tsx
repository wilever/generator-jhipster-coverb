import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumeTest = props => (
  <NavItem>
    <NavLink tag={Link} to="/resume-test" className="d-flex align-items-center">
      <FontAwesomeIcon icon="cube" />
      <span>
        ResumeTest
      </span>
    </NavLink>
  </NavItem>
);

export default ResumeTest;
