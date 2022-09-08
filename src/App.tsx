import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/Header';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from './redux/redux-store';
import Profile from './components/Profile/Profile';

const { Content, Footer } = Layout;

//приложение
function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <HeaderContainer></HeaderContainer> */}
      <Navbar></Navbar>
      <Layout className="site-layout">

        <Content style={{ margin: '0 60px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Profile></Profile>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>UnibotPortal ©2022 Created by JustLena</Footer>

      </Layout>
    </Layout>
  );
}

export default App;
