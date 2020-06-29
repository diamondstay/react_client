import React from 'react';

function CommentItem() {
  return (
    <div className="evaluate-item">
      <div className="info">
        <img
          src="https://graph.facebook.com/v3.0/2603107900010689/picture?type=normal"
          alt="anh"
        />
        <div className="info-right">
          <p>Phan Hai Nam</p>
          <span>11 ngay</span>
        </div>
      </div>
      <div style={{ marginTop: '12px', fontSize: '14px' }}>
        Không gian thoáng mát sáng sủa. Chỗ ở khá bụi và mình thấy có nhiều rác
        và vỏ nến từ các khách cũ để lại chưa được dọn. Bồn jacuzzi thoải mái và
        chỗ đẹp nhé. Nhìn chung so với giá thì tiện nghi đem lại là tốt rồi
      </div>
    </div>
  );
}
export default CommentItem;
