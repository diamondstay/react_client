/**
 *
 * Room Conveniences
 *
 */

import React from 'react';
import { getIcon } from 'components/Icon/function';

function RoomConveniences(props) {

  const { conveniences } = {...props};

  return (
    <section id="diamond-conveniences">
      <h2 className="page-title">Tiện nghi chỗ ở</h2>
      <p className="mb-4">Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú</p>

      <ul className="conveniences-list">
        {conveniences && conveniences.map(item => (
          <li key={item.id}>
            <i>{getIcon(item.name)}</i>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RoomConveniences;
