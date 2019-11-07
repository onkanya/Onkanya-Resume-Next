import { Row, Col } from 'antd'
import './style.css'

export default () => {
    return <>
        <Row type='flex'>
            <Col xs={{ span: 6 }} lg={{ span: 2, offset: 4 }}>
                <div className='cardpic'>
                    <div className='pic'></div>
                </div>
            </Col>
        </Row>
    </>
}