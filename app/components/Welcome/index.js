/**
 *
 * Welcome
 *
 */

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import reactLocalStorage from 'utils/localStorage';
import isEmpty from 'lodash/isEmpty';

function Welcome() {
  const [auth, setAuth] = useState(false);
  const userAccount = reactLocalStorage.getObject('user-account');
  useEffect(() => {
    if (isEmpty(userAccount)) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, []);

  return (
    <section id="diamond-welcome" className="content">
      <Container>
        {
          auth ?
            <h2 className="welcome-title">Chào mừng đến với Diamond Stay, {userAccount.first_name + ' ' + userAccount.last_name}!</h2>
            :
            <h2 className="welcome-title">Chào mừng đến với Diamond Stay!</h2>
        }
        <div className="welcome-text">
          <p>Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Diamond Stay</p>
          <p><a href="#">Đăng nhập</a> hoặc <a href="#">Đăng ký</a> để trải nghiệm !</p>
        </div>
      </Container>
    </section>
  );
}

export default Welcome;
