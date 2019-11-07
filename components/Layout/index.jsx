import { Layout, Typography, Row, Col } from 'antd'
const { Header, Content, Footer } = Layout
const { Title, Text } = Typography

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
                Onkanya Resume Create by Next + Ant Design
            </Footer>
        </Layout>
    )
}

export default DefaultLayout