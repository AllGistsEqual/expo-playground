import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../components/DemoPage'
import Box from '../components/Box'
import demoFrameWarning from '../../assets/demo/demoFrameWarning'

const setupSimple = {
    ...demoFrameWarning,
    width: 320,
    height: 320,
    margin: 20,
    scale: 1, // obsolete as 1 is default anyway
}
const setupOffset = {
    ...demoFrameWarning,
    width: 280,
    height: 160,
    margin: 0,
    scale: 0.6,
    backgroundColor: '#ddd',
}

const ScenePlayground = () => (
    <DemoPage isHome>
        <Box setup={setupSimple}>
            <Text>HERE BE BOX</Text>
        </Box>

        <Box setup={setupOffset}>
            <Text>HERE BE BOX</Text>
        </Box>
    </DemoPage>
)

export default ScenePlayground
