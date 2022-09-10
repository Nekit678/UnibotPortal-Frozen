import './App.css';
import { Layout } from 'antd';
import Profile from './components/Profile/Profile';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';

const { Content, Footer } = Layout;

//приложение
function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Content style={{ margin: '10px 160px' }}>
          <Routes>
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/tasks' element={<div>Tasks</div>} />
          <Route path='/leaderboard' element={<div>Leader Board</div>} />
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
