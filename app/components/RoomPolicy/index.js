/**
 *
 * Room Policy
 *
 */

import React from 'react';
import { letter } from 'components/Icon';

function RoomPolicy(props) {

  const { detail } = {...props};
  const { chart } = {...props};
  const { note } = {...props};

  return (
    <section id="diamond-policy">
      <h2 className="page-title">Nội quy và chính sách về chỗ ở</h2>
      <h3 className="section-title">Chính sách hủy phòng</h3>
      <p><strong>{detail.cancel_policy}:</strong> {detail.cancel_policy_description}</p>

      <div className="cancellation-rule">
        <div className="rule-title">
          <div className="title title-1">
            <p>{chart[0].label}</p>
          </div>
          <div className="title title-2">
            <p>{chart[1].label}</p>
          </div>
          <div className="title title-3">
            <p>{chart[2].label}</p>
          </div>
          <div className="title title-4">
            <p>{chart[3].label}</p>
          </div>
        </div>
        <div className="rule-content">
          <div className="content content-1">
            <div className="rule-process">
              <div className="symbol is-first" style={{ background: chart[0].color }}>
                <div className="check-mark" />
                <div className="line is-top" style={{ background: chart[0].color }}/>
                <div className="line is-bottom" style={{ background: chart[0].color }} />
              </div>
              <p className="text">{chart[0].content}</p>
            </div>
          </div>
          <div className="content content-2">
            <div className="rule-process">
              <div className="symbol is-normal" style={{ background: chart[1].color }}>
                <div className="line is-top" style={{ background: chart[1].color }} />
                <div className="line is-bottom" style={{ background: chart[1].color }} />
              </div>
              <p className="text">{chart[1].content}</p>
            </div>
          </div>
          <div className="content content-3">
            <div className="rule-process">
              <div className="symbol is-normal" style={{ background: chart[2].color }}>
                <div className="line is-top" style={{ background: chart[2].color }} />
                <div className="line is-bottom" style={{ background: chart[2].color }} />
              </div>
              <p className="text">{chart[2].content}</p>
            </div>
          </div>
          <div className="content content-4">
            <div className="rule-process is-last">
              <div className="symbol" style={{ background: chart[3].color }}>
                {letter}
                <div className="line is-top" style={{ background: chart[3].color }} />
                <div className="line is-bottom" style={{ background: chart[3].color }} />
              </div>
              <p className="text">{chart[3].content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-30" />

      <h3 className="section-title">Lưu ý đặc biệt</h3>
      <div className="special-note" dangerouslySetInnerHTML={{__html: note}} />

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
