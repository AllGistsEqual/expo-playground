import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
} from 'react-native'
import PropTypes from 'prop-types'

const ClickableScreen = ({ navigation, ...restProps }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <View {...restProps} style={styles.container}>
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
)

const AppLoadingScreen = ({ navigation }) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('App')}>
        <ClickableScreen navigation={navigation} />
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBox: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBox: {
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        width: '100%',
        height: '10%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})

ClickableScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}

AppLoadingScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}

export default AppLoadingScreen
