/**
 *
 * Room Policy
 *
 */

import React from 'react';
import Chart from './chart';

function RoomPolicy(props) {

  const { detail } = {...props};

  return (
    <section id="diamond-policy">
      <h2 className="page-title">Nội quy và chính sách về chỗ ở</h2>
      <h3 className="section-title">Chính sách hủy phòng</h3>
      <p><strong>{detail.cancel_policy}:</strong> {detail.cancel_policy_description}</p>

      <Chart />

      <div className="gap-30" />

      <h3 className="section-title">Lưu ý đặc biệt</h3>
      <div className="special-note">
        <ul>
          <li>Vui long xuất trình giấy tờ tùy thân để Home thực hiện thủ tục khai báo tạm trú</li>
          <li>Quý khách vui lòng không checkout muộn hơn 12 giờ</li>
          <li>Quý khách vui long không gây ồn sau 22 giờ</li>
        </ul>
      </div>

      <div className="gap-30" />

      <h3 className="section-title">Thời gian nhận phòng</h3>
      <div className="price-item is-flex">
        <span className="fl-item-50">Nhận phòng</span>
        <span className="fl-item-50">{detail.check_in_time}</span>
      </div>
      <div className="price-item is-flex">
        <span className="fl-item-50">Trả phòng</span>
        <span className="fl-item-50">{detail.check_out_time}</span>
      </div>
    </section>
  );
}

export default RoomPolicy;
