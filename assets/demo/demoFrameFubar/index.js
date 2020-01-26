import demoN from './demo_frame_02_N.png'
import demoNE from './demo_frame_02_NE.png'
import demoNW from './demo_frame_02_NW.png'
import demoE from './demo_frame_02_E.png'
import demoW from './demo_frame_02_W.png'
import demoS from './demo_frame_02_S.png'
import demoSE from './demo_frame_02_SE.png'
import demoSW from './demo_frame_02_SW.png'

const image = {
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

export default image
