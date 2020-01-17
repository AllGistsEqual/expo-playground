import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import buttonImage from '../../assets/sketch_button_01.png'

const ButtonTouchableOpacity = ({ children }) => (
    <TouchableOpacity>
        <ImageBackground
            source={buttonImage}
            style={styles.buttonTouchableOpacity}
        >
            {children}
        </ImageBackground>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    buttonTouchableOpacity: {
        width: 294,
        height: 74,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

ButtonTouchableOpacity.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ButtonTouchableOpacity
