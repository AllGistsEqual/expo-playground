import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../components/DemoPage'
import Box from '../components/Box'
import demoN from '../../assets/demo/demoFrameFubar/demo_frame_02_N.png'
import demoNE from '../../assets/demo/demoFrameFubar/demo_frame_02_NE.png'
import demoNW from '../../assets/demo/demoFrameFubar/demo_frame_02_NW.png'
import demoE from '../../assets/demo/demoFrameFubar/demo_frame_02_E.png'
import demoW from '../../assets/demo/demoFrameFubar/demo_frame_02_W.png'
import demoS from '../../assets/demo/demoFrameFubar/demo_frame_02_S.png'
import demoSE from '../../assets/demo/demoFrameFubar/demo_frame_02_SE.png'
import demoSW from '../../assets/demo/demoFrameFubar/demo_frame_02_SW.png'

const setupSimple = {
    width: 320,
    height: 320,
    margin: 20,
    N: {
        id: 'N',
        source: demoN,
        height: 35,
    },
    S: {
        id: 'S',
        source: demoS,
        height: 35,
    },
    E: {
        id: 'E',
        source: demoE,
        width: 35,
    },
    W: {
        id: 'W',
        source: demoW,
        width: 35,
    },
    NE: {
        id: 'NE',
        source: demoNE,
        width: 35,
        height: 35,
    },
    NW: {
        id: 'NW',
        source: demoNW,
        width: 35,
        height: 35,
    },
    SE: {
        id: 'SE',
        source: demoSE,
        width: 35,
        height: 35,
    },
    SW: {
        id: 'SW',
        source: demoSW,
        width: 35,
        height: 35,
    },
}
const setupOffset = {
    width: 280,
    height: 160,
    margin: 0,
    backgroundColor: '#ddd',
    N: {
        id: 'N',
        source: demoN,
        height: 35,
    },
    S: {
        id: 'S',
        source: demoS,
        height: 35,
    },
    E: {
        id: 'E',
        source: demoE,
        width: 35,
    },
    W: {
        id: 'W',
        source: demoW,
        width: 35,
    },
    NE: {
        id: 'NE',
        source: demoNE,
        width: 35,
        height: 35,
    },
    NW: {
        id: 'NW',
        source: demoNW,
        width: 35,
        height: 35,
    },
    SE: {
        id: 'SE',
        source: demoSE,
        width: 35,
        height: 35,
    },
    SW: {
        id: 'SW',
        source: demoSW,
        width: 35,
        height: 35,
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
