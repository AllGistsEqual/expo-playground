import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet,
} from 'react-native'

const Box = ({ children, setup }) => {
    const {
        width,
        height,
        margin,
    } = setup
    const styles = StyleSheet.create({
        boxOuter: {
            width: width || 240,
            height: height || 120,
            margin: margin || 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#000',
        },
    })

    return (
        <View style={styles.boxOuter}>
            {children}
        </View>
    )
}

const defaultSetup = {
    width: 240,
    height: 120,
    margin: 10,
}

Box.defaultProps = {
    children: undefined,
    setup: defaultSetup,
}

Box.propTypes = {
    children: PropTypes.node,
    setup: PropTypes.object,
}

export default Box
