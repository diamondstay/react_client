/**
 *
 * Hotel Room Rate
 *
 */

import React from 'react';
import { Filter} from 'constants/index';

function HotelRoomRate(props) {

  const { price } = {...props};

  return (
    <section id="diamond-room-rate">
      <h2 className="page-title">Giá phòng</h2>
      <p className="mb-4">Giá có thể tăng vào cuối tuần hoặc ngày lễ</p>

      <div className="hotel-price">
        {
          price.nightly_price > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Thứ hai - Thứ năm</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(price.nightly_price)}</span>
            </div>
            :
            <></>
        }
        {
          price.weekend_price > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Thứ sáu - Chủ nhật</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(price.weekend_price)}</span>
            </div>
            :
            <>:</>
        }
        {
          price.additional_guests_fee > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Phí khách tăng thêm</span>
              <span className="fl-item-50">{Filter.formatVndCurrency(price.additional_guests_fee)} (sau {price.standard_guests} khách)</span>
            </div>
            :
            <>:</>
        }
        {
          price.minimum_stay > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Số đêm tối thiểu</span>
              <span className="fl-item-50">{price.minimum_stay}</span>
            </div>
            :
            <>:</>
        }
        {
          price.minimum_stay > 0 ?
            <div className="price-item is-flex">
              <span className="fl-item-50">Số đêm tối đa</span>
              <span className="fl-item-50">{price.maximum_stay}</span>
            </div>
            :
            <>:</>
        }
      </div>

    </section>
  );
}

export default HotelRoomRate;
