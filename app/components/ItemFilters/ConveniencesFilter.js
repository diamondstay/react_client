import React, { useState } from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
function ConveniencesFilter(props) {
  const [active, setActive] = useState(false);
  const [convenience, setConvenience] = useState([]);
  const hanlCheckbox = e => {
    setConvenience([...convenience, e.target.value]);
  };
  const data = {
    lable: 'Tiện ích',
    name: 'convenience',
    id: 3,
    options: [
      {
        name: 'Hướng biển',
        id: 1,
      },
      {
        name: 'Bể bơi',
        id: 2,
      },
      {
        name: 'Miễn phí ăn sáng',
        id: 3,
      },
      {
        name: 'Máy pha cà phê',
        id: 4,
      },
      {
        name: 'WIFI free',
        id: 5,
      },
      {
        name: 'Máy sấy tóc',
        id: 6,
      },
      {
        name: 'Đệm bổ sung',
        id: 7,
      },
      {
        name: 'Bồn tắm',
        id: 8,
      },
      {
        name: 'Bếp điện',
        id: 9,
      },
      {
        name: 'Lò vi sóng',
        id: 10,
      },
      {
        name: 'Bếp gas',
        id: 11,
      },
      {
        name: 'Smart TV',
        id: 12,
      },
      {
        name: 'Tủ lạnh',
        id: 13,
      },
      {
        name: 'BBQ',
        id: 14,
      },
      {
        name: 'Máy giặt',
        id: 15,
      },
      {
        name: 'TV',
        id: 16,
      },
      {
        name: 'Điều hòa',
        id: 17,
      },
      {
        name: 'Ghế massage',
        id: 18,
      },
    ],
  };

  return (
    <div
      className={classNames('filter-by-item', {
        active: active === true,
      })}
      style={{
        position: 'relative',
      }}
    >
      <a
        onClick={() => {
          setActive(!active);
        }}
      >
        <i className="fas fa-map-marker" />
        <span>{data.lable}</span>
      </a>
      {active === true ? (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '1px',
            zIndex: 10,
            borderRadius: '4px',
            border: '1px solid #ebeef5',
            background: '#fff',
            boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)',
            padding: '10px',
            width: '200px',
          }}
        >
          {data &&
            data.options.map(option => (
              <Form.Check
                type="checkbox"
                label={option.name}
                style={{
                  marginBottom: '10px',
                }}
                key={option.id}
                value={option.id}
                onChange={hanlCheckbox}
                name={data.name}
              />
            ))}
          <div
            onClick={() =>
              props.history.push(
                `${props.location.pathname}?${queryString.stringify({
                  type: queryString.parse(props.location.search).type || '',
                  province: queryString.parse(props.location.search).province,
                  min_price: queryString.parse(props.location.search).min_price,
                  max_price: queryString.parse(props.location.search).max_price,
                  guest: queryString.parse(props.location.search).guest,
                  checkin: queryString.parse(props.location.search).checkin,
                  checkout: queryString.parse(props.location.search).checkout,
                  convenience: convenience || '',
                  limit: 10,
                  page: 1,
                  sort_by_price: 'desc',
                })}`,
              )
            }
            style={{
              color: '#fff',
              background: '#FF5722',
              textAlign: 'center',
              width: '100px',
              padding: '4px',
              borderRadius: '20px',
              fontSize: '12px',
            }}
          >
            Ap dụng
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default withRouter(ConveniencesFilter);
