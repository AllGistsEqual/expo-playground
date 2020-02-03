import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../../src/components/DemoPage'
import Box from '../components/BoxOld'
import demoImage from '../../assets/demo/demoFrameComic'

const setup3 = {
    ...demoImage,
    width: 360,
    height: 120,
    scale: 0.21,
    backgroundColor: 'magenta',
}
const setup4 = {
    ...demoImage,
    width: 240,
    height: 440,
    margin: 10,
    scale: 0.3,
    backgroundColor: 'green',
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
    },
}

const SceneHome = () => (
    <DemoPage>
        <Box setup={setup3}>
            <Text>Box Demo</Text>
        </Box>

        <Box setup={setup4}>
            <Text>Box Demo</Text>
        </Box>
    </DemoPage>
)

export default SceneHome
