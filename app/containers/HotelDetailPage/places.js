/**
 *
 * Hotel Places
 *
 */

import React from 'react';
import { Tabs } from 'antd';
import { getIcon } from 'components/Icon/function';
import { Row, Col } from 'react-bootstrap';

function HotelPlaces(props) {

  const { places } = {...props};
  const { TabPane } = Tabs;

  return (
    <section id="diamond-places">
      <h2 className="page-title">Tiện ích xung quanh</h2>
      <p className="mb-4">Trải nghiệm các tiện ích nổi bật xung quanh căn hộ</p>

      <Tabs defaultActiveKey="1" tabPosition="left">
        {places && places.map((place, i) => (
          <TabPane
            tab={
              <div>
                <i>{getIcon(place.slug)}</i>
                <span>{place.category}</span>
              </div>
            }
            key={i}
          >
            <Row>
              {place.places && place.places.map((item, i) => (
                <Col xs={12} sm={6} key={i}>
                  <div className="place-item">
                    <span className="place-number">{i + 1}</span>
                    <span className="place-name">{item.name}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </section>
  );
}

export default HotelPlaces;
