import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    text: {
        fontSize: 16,
        marginLeft: 5
    }
})

const CheckboxActo = props => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onChange(props.value)}>
            <Icon
                name={props.checked ? 'check-box' : 'check-box-outline-blank'}
                size={30}
                color={props.checked ? '#007aff' : '#000'}
            />
            <Text style={styles.text}>{props.label}</Text>
        </TouchableOpacity>
    )
}

CheckboxActo.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired
}

export default CheckboxActo
