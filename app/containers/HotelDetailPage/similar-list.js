/**
 *
 * Hotel Similar List
 *
 */

import React from 'react';
import Promo from 'components/Promo';
import { Row, Col } from 'react-bootstrap';

function HotelSimilarList(props) {

  const { list } = {...props};

  return (
    <section id="diamond-similar-list">
      <h2 className="page-title mb-4">Chỗ ở tương tự</h2>
      <Row>
        { list && list.map(item => (
          <Col xs={12} sm={3} key={item.id}>
            <Promo item={item} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default HotelSimilarList;
