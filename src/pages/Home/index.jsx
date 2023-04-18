import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { useState, useEffect } from "react";

const Home = () => {
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
          <SideMenu selectedKeys={selectedKeys} />
        </Sider>
        <Layout style={{ marginLeft: 200, background: "#F6F8FB" }}>
          <Content style={{ padding: "10px", overflow: "initial" }}>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
