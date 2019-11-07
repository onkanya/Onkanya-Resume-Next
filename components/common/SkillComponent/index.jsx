import { Row, Col, Progress } from 'antd'

export default ({ title, detail }) => {
    return <>
    <Row>
        <Col lg={{ span: 4, offset: 2 }}>{title} : </Col>
        <Col lg={{ span: 16 }}>
            <Progress
                percent={detail}
                showInfo={false}
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
            }}
            />
        </Col>
    </Row>
    </>
}