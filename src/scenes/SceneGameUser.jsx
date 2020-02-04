import React from 'react'
import { Text, View } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'
import BottomNavBar from '../components/BottomNavBar'

const SceneGameUser = () => (
    <DefaultPage isHome>
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>USER SETTINGS!</Text>
            </View>
            <View style={styles.headerPanel}>
                <Avatar
                    rounded
                    icon={{ name: 'face' }}
                    size="xlarge"
                />
                <Text>
                    NAME: John Johnson
                </Text>
                <Text>
                    EMAIL: email@emailson.son
                </Text>
                <Text>
                    PASSWORD: ********
                </Text>
                <Button
                    title="EDIT SETTINGS"
                />
            </View>
        </Panel>
        <BottomNavBar />
    </DefaultPage>
)

export default SceneGameUser
