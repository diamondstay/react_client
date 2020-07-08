/**
 *
 * Booking Coupon
 *
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import { Col, Row } from 'react-bootstrap';

function PaymentMethod() {

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  }

  const method = [
    {
      id: 1,
      title: 'VNPT EPAY - Visa, Master, JCB',
      desc: 'Giảm 20% tối đa 100k khi sử dụng thẻ Visa, Master, JCB thanh toán qua cổng VNPT EPAY.',
      img: 'https://cdn.luxstay.com/images/logos/payments/visa_master_jcb.svg'
    },
    {
      id: 2,
      title: 'VNPT EPAY - Thẻ ghi nợ nội địa ATM',
      desc: 'Giảm 20% tối đa 100k khi sử dụng thẻ ATM thanh toán qua cổng VNPT EPAY.',
      img: 'https://cdn.luxstay.com/images/logos/payments/napas.svg'
    },
    {
      id: 3,
      title: 'Thanh toán bằng thẻ quốc tế Visa, Master, JCB',
      desc: 'Nhập thông tin hoặc lựa chọn thẻ đã lưu để tiến hành thanh toán quốc tế qua Stripe.',
      img: 'https://cdn.luxstay.com/images/logos/payments/visa_master_jcb.svg'
    },
    {
      id: 4,
      title: 'OnePay Visa, Master, JCB',
      desc: 'Sử dụng thẻ thanh toán quốc tế để thanh toán qua cổng OnePay.',
      img: 'https://cdn.luxstay.com/images/logos/payments/visa_master_jcb.svg'
    },
    {
      id: 5,
      title: 'Thẻ ATM nội địa',
      desc: 'Sử dụng thẻ ATM nội địa để thanh toán qua cổng OnePay.',
      img: 'https://cdn.luxstay.com/images/logos/payments/napas.svg'
    },
    {
      id: 6,
      title: 'Chuyển khoản ngân hàng',
      desc: 'Tiếp tục để nhận hướng dẫn thanh toán và thông tin ngân hàng từ Diamond Stay.',
      img: 'https://cdn.luxstay.com/images/logos/payments/acb_vcb.svg'
    },
    {
      id: 7,
      title: 'ZaloPay',
      desc: 'Thanh toán bằng cổng thanh toán ZaloPay',
      img: 'https://cdn.luxstay.com/images/logos/payments/zalopay.png'
    },
    {
      id: 8,
      title: 'VNPay Gateway',
      desc: 'Thanh toán bằng QRCode với VNPay',
      img: 'https://cdn.luxstay.com/images/logos/payments/vnpayqr.png'
    },
    {
      id: 9,
      title: 'MoMo',
      desc: 'Thanh toán bằng ví điện tử MoMo.',
      img: 'https://cdn.luxstay.com/images/logos/payments/momo.png'
    },
  ];

  return (
    <Radio.Group onChange={onChange} value={value}>
      {method && method.map(item =>
        <div className="pay-item" key={item.id}>
          <Radio value={item.id}>
            <Row>
              <Col xs={8} md={10}>
                <div className="pay-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </Col>
              <Col xs={4} md={2}>
                <figure className="pay-logo">
                  <img src={item.img} />
                </figure>
              </Col>
            </Row>
          </Radio>
        </div>
      )}
    </Radio.Group>
  );
}

export default PaymentMethod;
