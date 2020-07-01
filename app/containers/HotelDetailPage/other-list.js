/**
 *
 * Hotel Other List
 *
 */

import React from 'react';
import Promo from 'components/Promo_';
import { Row, Col } from 'react-bootstrap';

function HotelOtherList(props) {

  const { list } = {...props};

  return (
    <section id="diamond-other-list">
      <h2 className="page-title mb-4">Chỗ ở khác của {props.host}</h2>
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

export default HotelOtherList;
