import PropTypes from 'prop-types'
import Button from './Button'

const header = ({title, onAdd}) => {
   
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button color = 'green' text = 'Add' onClick = {onAdd} />
        </div>
    )
}
header.propTypes={
    title: PropTypes.string.isRequired,
}
export default header

