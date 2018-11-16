import PropTypes from 'prop-types'
import React from 'react'
import CheckBox from './CheckBox'

const CheckboxesActo = props => {
    return props.checkBoxes.map(c => {
        return (
            <CheckBox
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
