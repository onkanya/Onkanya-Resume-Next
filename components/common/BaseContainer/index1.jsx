import './style.css'

export default ({ children, title }) => {
    return <>
        <div className='skill-container-style'>
            {/* Title */}
            <div className='title'>
                { title }
            </div>
            {/* Description */}
            <div>
                { children }
            </div>
        </div>
    </>
}