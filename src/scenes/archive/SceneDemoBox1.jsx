import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../../components/DemoPage'
import Box from '../../demo/BoxOld'
import testImage from '../../../assets/demo/demoFrameFubar'

const setup1 = {
    ...testImage,
    width: 360,
    height: 120,
    backgroundColor: 'magenta',
}
const setup2 = {
    ...testImage,
    width: 240,
    height: 440,
    margin: 10,
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
        <Box setup={setup1}>
            <Text>Box Demo</Text>
        </Box>

        <Box setup={setup2}>
            <Text>Box Demo</Text>
        </Box>
    </DemoPage>
)

export default SceneHome
