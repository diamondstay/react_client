import React, { useState } from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
function ItemFilter(props) {
  const [active, setActive] = useState(false);

  const { item } = props;

  const hanlCheckbox = e => {
    props.getOption({ name: e.target.name, value: e.target.value });
  };
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
        </div>
      ) : null}
    </div>
  );
}
export default ItemFilter;
