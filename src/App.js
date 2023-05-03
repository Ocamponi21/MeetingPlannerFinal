import SideMenu from './components/SideMenu';
import { Layout, Image } from 'antd';
import AppRoutes from "./components/Routes";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);
const { Sider, Content, Footer } = Layout;


function App() {
  return (
    <Layout>
      <Sider>
        <Image
          src="https://th.bing.com/th/id/R.fb92b1781b18ecd79cdf7779ef4aab0c?rik=Vx7pUOK%2foQoPfg&pid=ImgRaw&r=0://th.bing.com/th/id/OIP.3T1nsegMfw-JCNuI1aFzjQHaHK?pid=ImgDet&rs=1 "
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Meeting Planner Dashboard @2023
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withAuthenticator(App);
