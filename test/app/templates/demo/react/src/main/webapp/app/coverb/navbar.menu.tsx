import React from 'react';
import DropdownItem from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import NavDropdown from 'app/shared/layout/header/header-components';
import Default from 'app/coverb/default/default';
import Resume from 'app/coverb/resume/resume';
import Company from 'app/coverb/company/company';
// jhipster-needle-add-import-to-menu - JHipster will add entities to the menu here

const CoverMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="cubes" name="demo" id="demo-menu">
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

export default CoverMenu;
