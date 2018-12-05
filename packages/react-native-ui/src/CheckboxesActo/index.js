import PropTypes from 'prop-types'
import React from 'react'
import CheckboxActo from '../CheckboxActo'

const CheckboxesActo = props => {
    return props.checkBoxes.map(c => {
        return (
            <CheckboxActo
                key={c.value}
                label={c.value}
                value={c.value}
                onChange={props.onCheckBoxChange}
                checked={c.checked}
            />
        )
    })
}

CheckboxesActo.propTypes = {
    checkBoxes: PropTypes.array.isRequired,
    onCheckBoxChange: PropTypes.func.isRequired
}

export default CheckboxesActo
