import s from './Header.module.css'
import { Layout } from 'antd';
const { Header } = Layout

function HeaderContainer() {
    return (
        <div>
            <Header  style={{ position: "fixed", width: "100%", height: "40px" }}></Header>
        </div>


    )
}

export default HeaderContainer