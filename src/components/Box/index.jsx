import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet,
} from 'react-native'

const Box = ({ children }) => {
    const styles = StyleSheet.create({
        boxOuter: {
            width: 240,
            height: 120,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
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

Box.defaultProps = {
    children: undefined,
}

Box.propTypes = {
    children: PropTypes.node,
}

export default Box
