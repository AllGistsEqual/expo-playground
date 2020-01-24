import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../components/DemoPage'
import Box from '../components/Box'

const setupSimple = {
    width: 320,
    height: 320,
    margin: 20,
}
const setupOffset = {
    width: 280,
    height: 160,
    margin: 0,
    N: {
        id: 'N',
        height: 20,
        top: 10,
    },
    S: {
        id: 'S',
        height: 20,
        bottom: 10,
    },
    E: {
        id: 'E',
        width: 20,
        right: 10,
    },
    W: {
        id: 'W',
        width: 20,
        left: 10,
    },
    NE: {
        id: 'NE',
        width: 40,
        height: 40,
    },
    NW: {
        id: 'NW',
        width: 40,
        height: 40,
    },
    SE: {
        id: 'SE',
        width: 40,
        height: 40,
    },
    SW: {
        id: 'SW',
        width: 40,
        height: 40,
    },
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
