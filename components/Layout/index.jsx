import { Layout, Typography, Row, Col } from 'antd'
const { Header, Content, Footer } = Layout
const { Title, Text } = Typography

import './style.css'

const DefaultLayout = (props) => {
    return (
        <Layout>
            <Header className='layout-header-style'>
                <div>
                    ONKANYA WONGRAKTHAI [PROFILE]
                </div>
            </Header>
            <Content className='layout-content-style'>
                <div className='container'>
                    {props.children}
                </div>
            </Content>
            <Footer className='layout-footer-style'>
                ONKANYA WONGRAKTHAI
            </Footer>
        </Layout>
    )
}

export default DefaultLayout