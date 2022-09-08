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
      <Layout>
        <Content style={{ margin: '10px 160px' }}>
          <Profile></Profile>
        </Content>
        <Navbar></Navbar>
      </Layout>
      <div>
        <Footer style={{ textAlign: 'center' }}>UnibotPortal ©2022 Created by JustLena</Footer>
      </div>
    </Layout>
  );
}

export default App;
