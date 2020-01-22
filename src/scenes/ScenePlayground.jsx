import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../components/DemoPage'
import Box from '../components/Box'

const setup = {
    width: 320,
    height: 460,
    margin: 20,
}

const ScenePlayground = () => (
    <DemoPage isHome>
        <Box setup={setup}>
            <Text>HERE BE BOX</Text>
        </Box>
    </DemoPage>
)

export default ScenePlayground
