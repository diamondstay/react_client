import React, { useState } from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
function LocationFilter(props) {
  const [active, setActive] = useState(false);
  const [province, setProvince] = useState('');
  const hanlCheckbox = e => {
    setProvince(e.target.value);
  };

  const data = {
    lable: 'Địa điểm',
    name: 'province',
    id: 4,
    options: [
      {
        name: 'Hà Nội',
        id: 1,
      },
      {
        name: 'Sài Gòn',
        id: 2,
      },
      {
        name: 'Đà Nẵng',
        id: 3,
      },
      {
        name: 'Vũng tàu',
        id: 4,
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
                value={option.name}
                onChange={hanlCheckbox}
                name={data.name}
              />
            ))}
          <div
            onClick={() =>
              props.history.push(
                `${props.location.pathname}?${queryString.stringify({
                  convenience:
                    queryString.parse(props.location.search).convenience || '',
                  type: queryString.parse(props.location.search).type || '',
                  min_price: queryString.parse(props.location.search).min_price,
                  max_price: queryString.parse(props.location.search).max_price,
                  guest: queryString.parse(props.location.search).guest,
                  checkin: queryString.parse(props.location.search).checkin,
                  checkout: queryString.parse(props.location.search).checkout,
                  province,

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
export default withRouter(LocationFilter);
