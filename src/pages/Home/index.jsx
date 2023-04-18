import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout, theme } from "antd";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Content, Sider } = Layout;
  // 定义selectedKeys，来控制菜单选中状态和切换页面
  const [selectedKeys, setSelectedKeys] = useState([]);
  // useLocation react-router自带hook，能获取到当前路由信息
  const location = useLocation();
  // 每次切换路由，获取当前最新的pathname,并赋给menu组件
  useEffect(() => {
    // location.pathname对应路由数据中的path属性
    setSelectedKeys([location.pathname]);
  }, [location]);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className={styles.title}>桥梁建筑裂缝检测系统</div>
          <SideMenu selectedKeys={selectedKeys} />
        </Sider>
        <Layout style={{ marginLeft: 200, background: "#F6F8FB" }}>
          <Content
            style={{
              padding: "30px",
              overflow: "initial",
              background: "#F5F5F5",
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
