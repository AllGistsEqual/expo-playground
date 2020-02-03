import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles'

const AppLoadingScreen = ({ navigation }) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('App')}>
        <View style={styles.page}>
            <View style={styles.titleBox}>
                <Text>ALL BITS EQUAL</Text>
                <Text>presents</Text>
                <Text>The Expo Starter Kit</Text>
            </View>
            <View style={styles.contentBox}>
                <Text>Touch Screen to start!</Text>
            </View>
            <View style={styles.footer}>
                <Text>written by Konrad Abe</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
)

AppLoadingScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}

export default AppLoadingScreen
