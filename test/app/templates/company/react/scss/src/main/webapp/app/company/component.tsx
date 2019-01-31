import './style.scss';
import './icon-loader';

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'reactstrap';

export class Company extends Component {
  render() {
    return (
      <div>
        <section id="company">
          <div className="jumbotron text-center">
            <span id="logo-company" />
            <h1>
              Jhipster Latino
            </h1>
            <p>
              Development tools and courses for build better jhipster applications
            </p>
          </div>
          <div className="container-fluid text-center">
            <h2>
              Services
            </h2>
            <p>
              What we offer?
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
              Portafolio
            </h2>
            <p>
              What did we already created?
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
                Pricing
              </h2>
              <p>
                Choose a payment plan that works for you
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

export default Company;
