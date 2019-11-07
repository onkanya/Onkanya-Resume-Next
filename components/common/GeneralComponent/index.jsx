import { Row, Col, Icon } from 'antd'

export default ({ icon, title, detail }) => {
    return <>
    <Row type='flex' align='middle'>
        <Col xs={{ span: 6 }} lg={{ span: 2, offset: 2 }}><Icon type={icon} /> </Col>
        <Col xs={{ span: 12 }} lg={{ span: 4 }}>{title} : </Col>
        <Col xs={{ span: 6 }} lg={{ span: 6 }}>{detail}</Col>
    </Row>
    </>
}