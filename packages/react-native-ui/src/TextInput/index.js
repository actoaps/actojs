import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        width: '80%',
        height: 50,
        alignSelf: 'center'
    },
    labelStyle: {
        fontSize: 16,
        marginLeft: '10%',
        marginBottom: '3%',
        marginTop: '3%'
    },
    containerStyle: {
        width: '100%'
    }
})

const TextInputActo = (props) => {
    const {inputStyle, labelStyle, containerStyle} = styles
    const {label, text, handleChange, autoCorrect, placeholder, keyboardType, autoCapitalize} = props
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCorrect={autoCorrect}
                style={inputStyle}
                value={text}
                placeholder={placeholder}
                keyboardType={keyboardType}
                onChangeText={handleChange}
                autoCapitalize={autoCapitalize}
                underlineColorAndroid='rgba(0,0,0,0)'
            />
        </View>
    )
}

TextInputActo.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    autoCorrect: PropTypes.bool,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    autoCapitalize: PropTypes.string
}

TextInputActo.default = {
    autoCorrect: true,
    keyboardType: 'default',
    autoCapitalize: 'none'
}

export default TextInputActo
