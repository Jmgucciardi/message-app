import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Row, Col, Alert } from 'react-bootstrap';
import SignUp from './SignUp';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';


class SignUpSignIn extends Component {

  renderError() {
    return (
      <Alert bsStyle="danger">
        <strong>{this.props.error}</strong>
      </Alert>
    );
  }

  render() {
    return (
      <Row>
        <Col xs={8} xsOffset={2}>
          {this.props.error && this.renderError()}
          <Tabs defaultActiveKey={1} id="signup-signin-tabs">
            <Tab eventKey={1} title="Sign Up">
              <SignUp onSignUp={this.props.onSignUp}/>
            </Tab>
            <Tab eventKey={2} title="Sign In">
              Sign In
            </Tab>
          </Tabs>
        </Col>
      </Row>
    );
  }
}

SignUpSignIn.propTypes = {
  error: PropTypes.string,
  onSignUp: PropTypes.func.isRequired
};

export default withRedux(initStore, null, null)(SignUpSignIn);
