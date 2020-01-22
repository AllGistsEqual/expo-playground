import demoN from './demo_frame_03_N.png'
import demoNE from './demo_frame_03_NE.png'
import demoNW from './demo_frame_03_NW.png'
import demoE from './demo_frame_03_E.png'
import demoW from './demo_frame_03_W.png'

const image = {
    N: {
        id: 'N',
        source: demoN,
        height: 38,
        left: 1,
        right: 1,
    },
    S: {
        id: 'S',
        source: demoN,
        height: 38,
        left: 1,
        right: 1,
    },
    E: {
        id: 'E',
        source: demoE,
        width: 15,
        right: 10,
    },
    W: {
        id: 'W',
        source: demoW,
        width: 15,
        left: 10,
    },
    NE: {
        id: 'NE',
        source: demoNE,
        width: 38,
        height: 38,
    },
    NW: {
        id: 'NW',
        source: demoNW,
        width: 38,
        height: 38,
    },
    SE: {
        id: 'SE',
        source: demoNE,
        width: 38,
        height: 38,
    },
    SW: {
        id: 'SW',
        source: demoNW,
        width: 38,
        height: 38,
    },
}
export default image
