import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'
import game from '../../assets/demo/tictactoe.jpeg'

const SceneGameHome = () => (
    <DefaultPage isHome>
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>PLAY TIME!</Text>
            </View>
            <View style={styles.headerPanel}>
                <Image
                    source={game}
                    style={{ width: 300, height: 300 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text>
                    Let&apos;s play a game!
                </Text>
            </View>
        </Panel>
    </DefaultPage>
)

export default SceneGameHome
