import demoN from './demo_frame_01_N.png'
import demoNE from './demo_frame_01_NE.png'
import demoNW from './demo_frame_01_NW.png'
import demoE from './demo_frame_01_E.png'
import demoW from './demo_frame_01_W.png'
import demoS from './demo_frame_01_S.png'
import demoSE from './demo_frame_01_SE.png'
import demoSW from './demo_frame_01_SW.png'

const image = {
    N: {
        id: 'N',
        source: demoN,
        height: 75,
    },
    S: {
        id: 'S',
        source: demoS,
        height: 112,
    },
    E: {
        id: 'E',
        source: demoE,
        width: 104,
    },
    W: {
        id: 'W',
        source: demoW,
        width: 102,
    },
    NE: {
        id: 'NE',
        source: demoNE,
        width: 239,
        height: 184,
    },
    NW: {
        id: 'NW',
        source: demoNW,
        width: 237,
        height: 184,
    },
    SE: {
        id: 'SE',
        source: demoSE,
        width: 239,
        height: 211,
    },
    SW: {
        id: 'SW',
        source: demoSW,
        width: 237,
        height: 211,
    },
}
export default image
