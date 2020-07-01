/**
 *
 * Auth Template
 *
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './welcome';
import Feature from './feature';
import Form1 from './register-form';

function AuthTemplate({ type }) {

  console.log(type);

  return (
    <article id="diamond-auth">
      <Welcome />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Feature />
          </Col>
          <Col xs={12} md={4}>
            {{
              1: (
                <Form1 />
              ),
              default: (
                <></>
              )
            }[type]}
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default AuthTemplate;
