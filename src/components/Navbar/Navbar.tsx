import s from './Navbar.module.css'
import { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Image } from 'antd'
import Button from 'antd/lib/button';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Профиль', '1', <UserOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

function Navbar() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Sider style={{ height: "100%", position: "fixed" }} collapsed={collapsed} onMouseOver={() => setCollapsed(false)} onMouseOut={() => setCollapsed(true)}>
            <div className={s.info}>
                <Image src='https://www.codewars.com/packs/assets/logo.61192cf7.svg'></Image>
                <Button style={{ width: "100%" }} type='primary'>Login</Button>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
}

export default Navbar