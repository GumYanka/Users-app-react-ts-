import React from "react";
import { Layout, Menu, Switch } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

interface SidebarProps {
  theme: any;
  collapsed: boolean;
  changeTheme: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ theme, collapsed, changeTheme }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme={theme}
      style={{
        height: "100%",
        position: "fixed",
        left: 0,
        zIndex: 1,
      }}
    >
      <div className="demo-logo-vertical" />
      <br />
      <Menu theme={theme} mode="inline">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
      </Menu>
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 3,
        }}
      >
        <Switch
          style={{
            height: 17,
          }}
          size="small"
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
