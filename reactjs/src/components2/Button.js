import PropTypes from 'prop-types'
const Button = ({color, text, onClick}) => {
    return (
            <button className='btn' onClick={onClick} style={{background: "green"}}>{text}</button>
    )
}
Button.defaultProps = {
    color: 'green',
    text: 'Add'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,

}
export default Button
