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
import Form2 from './login-form';

function AuthTemplate({ type, onSubmit }) {

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
                <Form1 onSubmit={onSubmit} />
              ),
              2: (
                <Form2 onSubmit={onSubmit} />
              ),
              default: (
                <></>
              )
            }[type]}
          </Col>
        </Row>
      </Container>
      <div className="gap-50" />
    </article>
  );
}

export default AuthTemplate;
