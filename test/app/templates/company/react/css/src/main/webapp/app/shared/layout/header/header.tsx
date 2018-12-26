import { Home, Brand } from './header-components';
import { AdminMenu, EntitiesMenu, AccountMenu, LocaleMenu } from './menus';

import { Default } from 'app/modules/default/default.item';
import { Company } from 'app/modules/company/company.item';
import { Resume } from 'app/modules/resume/resume.item';
import { CoverMenu } from 'app/cover/cover.menu';

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isSwaggerEnabled: boolean;
  currentLocale: string;
  onLocaleChange: Function;
}

  render() {
    const { currentLocale, isAuthenticated, isAdmin, isSwaggerEnabled, isInProduction } = this.props;

    /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */

    return (
      <div id="app-header">
        {this.renderDevRibbon()}
        <LoadingBar className="loading-bar" />
        <Navbar dark expand="sm" fixed="top" className="jh-navbar">
          <NavbarToggler aria-label="Menu" onClick={this.toggleMenu} />
          <Brand />
          <Collapse isOpen={this.state.menuOpen} navbar>
            <Nav id="header-tabs" className="ml-auto" navbar>
              <Home />
              <Company />{/* Company Nav-bar item*/}
              {isAuthenticated && <EntitiesMenu />}
              {isAuthenticated && isAdmin && <AdminMenu showSwagger={isSwaggerEnabled} showDatabase={!isInProduction} />}
              <LocaleMenu currentLocale={currentLocale} onClick={this.handleLocaleChange} />
              <AccountMenu isAuthenticated={isAuthenticated} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
