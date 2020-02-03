import React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground, ScrollView } from 'react-native'
import { blueprint } from '../../../assets'
import styles from '../../styles'

const DefaultPage = ({ children }) => (
    <ImageBackground source={blueprint} resizeMode="repeat" style={styles.containerCentered}>
        <ScrollView contentContainerStyle={styles.constrainerCentered}>
            {children}
        </ScrollView>
    </ImageBackground>
)

DefaultPage.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultPage
