import './style.css';
import './icon-loader';

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from 'react-jhipster';
import { Row, Col } from 'reactstrap';

export class CompanyTest extends Component {
  render() {
    return (
      <div>
        <section id="company-test">
          <div className="jumbotron text-center">
            <span id="logo-company" />
            <h1>
              <Translate contentKey="company-test.name">Jhipster Latino</Translate>
            </h1>
            <p>
              <Translate contentKey="company-test.description">Development tools and courses for build better jhipster applications</Translate>
            </p>
          </div>
          <div className="container-fluid text-center">
            <h2>
              <Translate contentKey="company-test.service.title">Services</Translate>
            </h2>
            <p>
              <Translate contentKey="company-test.service.description">What we offer?</Translate>
            </p>
            <br />
            <Row>
              <Col sm="4">
                <FontAwesomeIcon icon="bullhorn" className="icon" />
                <h4>Training</h4>
                <p>Improvement your carrear</p>
              </Col>
              <Col sm="4">
                <FontAwesomeIcon icon="chart-line" className="icon" />
                <h4>Tools</h4>
                <p>Optimice your time</p>
              </Col>
              <Col sm="4">
                <FontAwesomeIcon icon="magic" className="icon" />
                <h4>Design</h4>
                <p>Details are important</p>
              </Col>
            </Row>
          </div>
          <div className="container-fluid text-center bg-gray">
            <h2>
              <Translate contentKey="company-test.portafolio.title">Portafolio</Translate>
            </h2>
            <p>
              <Translate contentKey="company-test.portafolio.description">What did we already created?</Translate>
            </p>
            <br />
            <Row className="text-center">
              <Col sm="4">
                <div className="thumbnail">
                  <FontAwesomeIcon icon="cubes" className="icon" />
                  <h4>coverb</h4>
                  <p>Customice you client</p>
                </div>
              </Col>
              <Col sm="4">
                <div className="thumbnail">
                  <FontAwesomeIcon icon="cogs" className="icon" />
                  <h4>moduleb</h4>
                  <p>Build your own module</p>
                </div>
              </Col>
              <Col sm="4">
                <div className="thumbnail">
                  <FontAwesomeIcon icon="server" className="icon" />
                  <h4>engineb</h4>
                  <p>Data managment</p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="container-fluid">
            <div className="text-center">
              <h2>
                <Translate contentKey="company-test.pricing.title">Pricing</Translate>
              </h2>
              <p>
                <Translate contentKey="company-test.pricing.description">Choose a payment plan that works for you</Translate>
              </p>
              <br />
            </div>
            <Row>
              <Col sm="4">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">
                    <h1>Basic</h1>
                  </div>
                  <div className="panel-body">
                    <br />
                    <p>Access to a lot of training content</p>
                    <p>Access to source our product</p>
                    <p>Comunity support</p>
                    <div className="panel-footer">
                      <hr />
                      <h3>Free</h3>
                      <h4>Just say thank you</h4>
                      <button className="btn btn-lg">Sign Up</button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm="4">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">
                    <h1>Pro</h1>
                  </div>
                  <div className="panel-body">
                    <br />
                    <p>Full access to training content</p>
                    <p>Full access to our premiun products</p>
                    <p>Access to source our product</p>
                  </div>
                  <div className="panel-footer">
                    <hr />
                    <h3>$10</h3>
                    <h4>per month</h4>
                    <button className="btn btn-lg">Sign Up</button>
                  </div>
                </div>
              </Col>
              <Col sm="4">
                <div className="panel panel-default text-center">
                  <div className="panel-heading">
                    <h1>Premium</h1>
                  </div>
                  <div className="panel-body">
                    <br />
                    <p>You can request features for products</p>
                    <p>Full support from our team</p>
                    <p>
                      All our <strong>Pro plan</strong> features
                    </p>
                  </div>
                  <div className="panel-footer">
                    <hr />
                    <h3>$25</h3>
                    <h4>per month</h4>
                    <button className="btn btn-lg">Sign Up</button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}

export default CompanyTest;
