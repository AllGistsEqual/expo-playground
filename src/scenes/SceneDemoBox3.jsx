import React from 'react'
import { Text, ImageBackground } from 'react-native'
import DemoPage from '../components/DemoPage'
import Box from '../demo/BoxOld'
import warningImage from '../../assets/demo/demoFrameWarning'
import warningSign from '../../assets/demo/demoFrameWarning/demo_frame_03_decoration_N.png'

const setup5 = {
    ...warningImage,
    width: 360,
    height: 120,
    scale: 0.8,
    backgroundColor: 'magenta',
    backgroundOffset: {
        top: 38,
        bottom: 38,
        left: 25,
        right: 25,
    },
}
const setup6 = {
    ...warningImage,
    width: 240,
    height: 440,
    margin: 10,
    scale: 1,
    backgroundColor: 'green',
    backgroundOffset: {
        top: 38,
        bottom: 38,
        left: 25,
        right: 25,
    },
    padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
    },
}

const decorations6 = [
    <ImageBackground
        key="signTop"
        source={warningSign}
        style={{
            position: 'absolute',
            top: 5,
            width: 124,
            height: 27,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>
            Label
        </Text>
    </ImageBackground>,
]

const SceneHome = () => (
    <DemoPage>
        <Box setup={setup5}>
            <Text>Box Demo</Text>
        </Box>

        <Box
            setup={setup6}
            decorations={decorations6}
        >
            <Text>Box Demo</Text>
        </Box>
    </DemoPage>
)

export default SceneHome
