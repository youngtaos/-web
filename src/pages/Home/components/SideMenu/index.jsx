import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu } from "antd";

const SideMenu = ({ selectedKeys }) => {
  return (
    <Menu theme="dark" selectedKeys={selectedKeys}>
      <Menu.Item key={1}>
        <NavLink to="/home/pic">图片检测</NavLink>
      </Menu.Item>
      <Menu.Item key={2}>
        <NavLink to="/home/user">视频检测</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
