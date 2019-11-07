import { Layout, Typography, Row, Col } from 'antd'
const { Header, Content, Footer } = Layout

import './style.css'

const DefaultLayout = (props) => {
    return (
        <Layout>
            <Header className='layout-header-style'>
                <div>
                    ONKANYA [Resume]
                </div>
            </Header>
            <Content className='layout-content-style'>
                <div className='container'>
                    {props.children}
                </div>
            </Content>
            <Footer className='layout-footer-style'>
                Resume Created by Next & Ant Design
            </Footer>
        </Layout>
    )
}

export default DefaultLayout