import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'

const SceneLogOut = () => (
    <DefaultPage isHome>
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>LOGGED OUT!</Text>
            </View>
            <View style={styles.headerPanel}>
                <Text>
                    We are sad to see you go but should you want to return, we&apos;re gonna leave
                    a light on for you, UK.
                </Text>
                <Button
                    title="SIGN ME IN AGAIN"
                />
            </View>
        </Panel>
    </DefaultPage>
)

export default SceneLogOut
