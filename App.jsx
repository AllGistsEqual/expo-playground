import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, View, StatusBar } from 'react-native'
import configureStore from './src/redux/store'
import { initialiseApplication } from './src/redux/actions/application.actions'
import Navigation from './src/routing/Navigation'

const store = configureStore()
store.dispatch(initialiseApplication())
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },
})

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar hidden />
                <Navigation />
            </View>
        </Provider>
    )
}
