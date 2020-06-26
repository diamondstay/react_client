/**
 *
 * User Menu
 *
 */

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { calendar, envelope, gear, heart, signOut } from 'components/Icon';

function UserMenu() {

  const onClick = ({ key }) => {
    console.log(key);
  };

  return (
    <Menu onClick={onClick} className="user-menu">
      <Menu.Item key="1" className="menu-item">
        <Link to="/my-booking">
          <i>{calendar}</i>
          <span>Đặt chỗ của tôi</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2" className="menu-item">
        <Link to="/message">
          <i>{envelope}</i>
          <span>Tin nhắn</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3" className="menu-item">
        <Link to="/setting">
          <i>{gear}</i>
          <span>Cài đặt tài khoản</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="4" className="menu-item">
        <Link to="/love">
          <i>{heart}</i>
          <span>Yêu thích</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="5" className="menu-item">
        <Link to="/logout">
          <i>{signOut}</i>
          <span>Đăng xuất</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default UserMenu;
