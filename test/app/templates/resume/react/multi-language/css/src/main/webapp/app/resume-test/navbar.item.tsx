import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from 'react-jhipster';

const ResumeTest = props => (
  <NavItem>
    <NavLink tag={Link} to="/resume-test" className="d-flex align-items-center">
      <FontAwesomeIcon icon="cube" />
      <span>
        <Translate contentKey="global.menu.resume-test">ResumeTest</Translate>
      </span>
    </NavLink>
  </NavItem>
);

export default ResumeTest;
