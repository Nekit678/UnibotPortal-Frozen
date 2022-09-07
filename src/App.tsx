import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import Navbar from './components/Navbar/Navbar';

const { Header, Content, Footer} = Layout;

//приложение
function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar></Navbar>
      <Layout className="site-layout">
        
        <Header></Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Preloader></Preloader>
            <Preloader></Preloader>
            <Preloader></Preloader>
            <Preloader></Preloader>
            <Preloader></Preloader>
            <Preloader></Preloader>
            <Preloader></Preloader>
            <Preloader></Preloader>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>UnibotPortal ©2022 Created by JustLena</Footer>

      </Layout>
    </Layout>
  );
}

export default App;
