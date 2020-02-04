import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from '../styles'

const handleClick = (isUserLoggedIn, navigation) => (
    isUserLoggedIn
        ? navigation.navigate('App')
        : navigation.navigate('Login')
)

const AppLoadingScreen = ({ navigation, isUserLoggedIn }) => (
    <TouchableWithoutFeedback onPress={() => handleClick(isUserLoggedIn, navigation)}>
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

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.user.isLoggedIn,
})

AppLoadingScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(AppLoadingScreen)
