import { Collapse, Icon } from 'antd'
const { Panel } = Collapse

import './style.css'

export default ({ children, titleheader }) => {
    return <>
        <Collapse
            bordered={true}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
            <Panel header={ titleheader } className='base-containner-style-panel'>
                <p>{ children }</p>
            </Panel>
        </Collapse>
    </>
}

