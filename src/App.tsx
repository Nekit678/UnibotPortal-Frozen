import './App.css';
import { Layout } from 'antd';
import Profile from './components/Profile/Profile';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { Route, Routes } from 'react-router-dom';

const { Content, Footer } = Layout;

//приложение
function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Content style={{ margin: '10px 160px' }}>
          <Routes>
          <Route path='/profile' element={<Profile />} />
          </Routes>
        </Content>
        <NavbarContainer/>
      </Layout>
      <div>
        <Footer style={{ textAlign: 'center' }}>UnibotPortal ©2022 Created by JustLena</Footer>
      </div>
    </Layout>
  );
}

export default App;
