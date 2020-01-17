import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import PropTypes from 'prop-types'

import boxImage from '../../assets/sketch_box_01.png'

const BoxSimple = ({ children }) => (
    <ImageBackground
        source={boxImage}
        style={styles.boxImageBackground}
    >
        {children}
    </ImageBackground>
)

const styles = StyleSheet.create({
    boxImageBackground: {
        width: 160,
        height: 120,
        padding: 10,
        margin: 20,
    },
})

BoxSimple.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BoxSimple
