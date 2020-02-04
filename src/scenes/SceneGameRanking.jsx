import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import BottomNavBar from '../components/BottomNavBar'
import styles from '../styles'
import highscores from '../../assets/demo/highscores.jpg'

const SceneGameRanking = () => (
    <DefaultPage isHome>
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>Ranking Page</Text>
            </View>
            <View style={styles.headerPanel}>
                <Image
                    source={highscores}
                    style={{ width: 300, height: 380 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>
        </Panel>
        <BottomNavBar />
    </DefaultPage>
)

export default SceneGameRanking
