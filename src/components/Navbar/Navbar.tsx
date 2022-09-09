import s from './Navbar.module.css'
import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, Image } from 'antd'
import Button from 'antd/lib/button';
import { useMatch, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function Navbar({items}:{items:MenuItem[]}) {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate()
    const defKey = useMatch("/*")

    return (
        <Sider theme="dark" style={{ height: "100%", position: "fixed" }} collapsed={collapsed}
            onMouseOver={() => setCollapsed(false)} onMouseOut={() => setCollapsed(true)}>
            <div className={s.info}>
                <Image src='https://i.pinimg.com/236x/2c/60/cb/2c60cb34a209daa60ee0b6c53cd35688.jpg'></Image>
                <Button style={{ width: "100%" }} type='primary'>Login</Button>
            </div>
            <Menu onClick={({key}) => navigate(key)} theme="dark" defaultSelectedKeys={[defKey?.pathname || ""]} mode="inline" items={items} />
        </Sider>
    )
}

export default Navbar