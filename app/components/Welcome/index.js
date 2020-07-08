/**
 *
 * Welcome
 *
 */

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import reactLocalStorage from 'utils/localStorage';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';

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
          <p className={`${auth ? 'd-none' : ''}`}><Link to={'/login'}>Đăng nhập</Link> hoặc <Link to={'/register'}>Đăng ký</Link> để trải nghiệm !</p>
        </div>
      </Container>
    </section>
  );
}

export default Welcome;
