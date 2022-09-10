import {
    EditOutlined,
    RiseOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Navbar from './Navbar';

export type MenuItem = Required<MenuProps>['items'][number];

function NavbarContainer() {

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
        getItem('Профиль', '/profile', <UserOutlined />),
        getItem('Задачки', '/tasks', <EditOutlined />),
        getItem('50 лучших', '/leaderboard', <RiseOutlined />),
        // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        // getItem('Files', '9', <FileOutlined />),
    ];

    return (
        <Navbar items={items}></Navbar>
    )
}

export default NavbarContainer