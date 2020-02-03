import React from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import styles from '../styles'

const ClickableScreen = () => (
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
)

const AppLoadingScreen = () => (
    <TouchableWithoutFeedback>
        <ClickableScreen />
    </TouchableWithoutFeedback>
)

export default AppLoadingScreen
