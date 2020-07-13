import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
function PriceFilter(props) {
  const [active, setActive] = useState(false);
  const [price, setPrice] = useState('');
  const [min_price, set_min_price] = useState(0);
  const [max_price, set_max_price] = useState(10);

  const hanlCheckbox = e => {
    setPrice(e.target.value);
  };
  useEffect(() => {
    const value = price.split('-');
    set_min_price(value[0]);
    set_max_price(value[1]);
    if (price.includes('>')) {
      const value1 = price.split('>');
      set_min_price(value1[1].trim());
    }
  }, [price]);

  const data = {
    lable: 'Giá cả',
    name: 'price',
    id: 4,
    options: [
      {
        name: '0-500000',
        id: 0,
      },
      {
        name: '500000-1000000',
        id: 1,
      },
      {
        name: '1000000-2000000',
        id: 2,
      },
      {
        name: '2000000-3000000',
        id: 3,
      },
      {
        name: '3000000-4000000',
        id: 4,
      },
      {
        name: ' > 4000000',
        id: 5,
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
                  province: queryString.parse(props.location.search).province,
                  guest: queryString.parse(props.location.search).guest,
                  checkin: queryString.parse(props.location.search).checkin,
                  checkout: queryString.parse(props.location.search).checkout,
                  min_price,
                  max_price,
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
export default withRouter(PriceFilter);
