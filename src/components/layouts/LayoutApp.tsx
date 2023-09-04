import React, { useState } from "react";
import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

interface LayoutAppProps {
  children?: React.ReactNode;
  theme: string;
  changeTheme: (value: boolean) => void;
}

const LayoutApp: React.FC<LayoutAppProps> = ({
  theme,
  changeTheme,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar theme={theme} collapsed={collapsed} changeTheme={changeTheme} />
      <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
        <Header
          style={{
            padding: 0,
            background: theme === "dark" ? "#001529" : "#fff",
          }}
        >
          <Button
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined
                  style={{ color: theme === "dark" ? "#fff" : "#000000" }}
                />
              ) : (
                <MenuFoldOutlined
                  style={{ color: theme === "dark" ? "#fff" : "#000000" }}
                />
              )
            }
            onClick={toggleSidebar}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
