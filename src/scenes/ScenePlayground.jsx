import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../components/DemoPage'
import Box from '../components/Box'
import demoFrameFubar from '../../assets/demo/demoFrameFubar'
import demoFrameComic from '../../assets/demo/demoFrameComic'

const setupSimple = {
    ...demoFrameFubar,
    width: 320,
    height: 320,
    margin: 20,
}
const setupOffset = {
    ...demoFrameComic,
    width: 280,
    height: 160,
    margin: 0,
    scale: 0.2,
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
