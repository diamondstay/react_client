import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function ItemFilter(props) {
  const [active, setActive] = useState(false);
  const [q, setQ] = useState('');
  const [type, setType] = useState([]);

  const { item } = props;

  const hanlCheckbox = e => {
    if (e.target && e.target.name === 'type') {
      setType([...type, e.target.value]);
    }
    // props.getOption({ name: e.target.name, value: e.target.value });
  };
  useEffect(() => {
    if (type.length > 0) {
      setQ(`type=${type.join('&type=')}`);
    }
  }, [type]);
  return (
    <div
      className={classNames('filter-by-item', {
        active: active === true,
      })}
      style={{ position: 'relative' }}
    >
      <a
        onClick={() => {
          setActive(!active);
        }}
      >
        <i className="fas fa-map-marker" />
        <span>{item.lable}</span>
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
          {item &&
            item.options.map(option => (
              <Form.Check
                type="checkbox"
                label={option.name}
                key={option.id}
                style={{ marginBottom: '10px' }}
                value={option.id}
                onChange={hanlCheckbox}
                name={item.name}
              />
            ))}
          <NavLink
            to={`/search-result?${q}`}
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
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}
export default ItemFilter;
