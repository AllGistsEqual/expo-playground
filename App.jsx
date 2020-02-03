import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import configureStore from './src/redux/store'
import { initialiseApplication } from './src/redux/actions/application.actions'
import SceneHome from './src/scenes/SceneHome'

const store = configureStore()
store.dispatch(initialiseApplication())

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar hidden />
            <SceneHome />
        </Provider>
    )
}
