import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../components/DemoPage'
import Box from '../components/Box'
import demoFrame from '../../assets/demo/demoFrameFubar'

const setupSimple = {
    ...demoFrame,
    width: 320,
    height: 320,
    margin: 20,
}
const setupOffset = {
    ...demoFrame,
    width: 280,
    height: 160,
    margin: 0,
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
