import React from 'react'
import { ImageBackground, Text } from 'react-native'
import { blueprint } from '../../assets'
import NavigationButton from '../components/NavigationButton'
import Panel from '../components/Panel'
import styles from '../styles'

const SceneSettings = () => (
    <ImageBackground source={blueprint} resizeMode="repeat" style={styles.container}>

        <Panel title="Settings Page">
            <Text>
                Lorem Ipsum
            </Text>
            <NavigationButton title="<< Back to home" target="Home" />
        </Panel>

    </ImageBackground>
)

export default SceneSettings
