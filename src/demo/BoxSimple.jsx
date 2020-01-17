import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const BoxSimple = ({ children }) => (
    <View style={styles.boxSimple}>
        {children}
    </View>
)

const styles = StyleSheet.create({
    boxSimple: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',
        padding: 10,
        margin: 20,
    },
})

BoxSimple.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BoxSimple
