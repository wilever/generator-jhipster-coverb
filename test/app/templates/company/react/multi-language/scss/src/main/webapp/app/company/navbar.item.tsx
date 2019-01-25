import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from 'react-jhipster';

const Company = props => (
  <NavItem>
    <NavLink tag={Link} to="/company" className="d-flex align-items-center">
      <FontAwesomeIcon icon="cube" />
      <span>
        <Translate contentKey="global.menu.company">Company</Translate>
      </span>
    </NavLink>
  </NavItem>
);

export default Company;
