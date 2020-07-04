/**
 *
 * Chart
 *
 */

import React from 'react';
import { letter } from 'components/Icon';

function Chart() {

  const chart = [
    {
      label: 'Đặt phòng thành công',
      color: '#28ca6e',
      content: 'Hoàn tiền 100%',
    },
    {
      label: ' Sau 48h',
      color: '#ffb500',
      content: 'Hoàn tiền 100% (trừ phí dịch vụ)',
    },
    {
      label: '14 ngày trước check-in',
      color: '#f65e39',
      content: 'Hoàn 50% (trừ phí đêm đầu tiên, phí dịch vụ và các phí kèm theo)',
    },
    {
      label: 'Check-in',
      color: '#f65e39',
      content: '',
    },
  ];

  return (
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
  );
}

export default Chart;
