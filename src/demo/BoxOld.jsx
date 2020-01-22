import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native'
import * as defaultFrame from '../../assets/demo/demoFrameFubar'

const Box = ({ children, setup, decorations }) => {
    const {
        width,
        height,
        margin,
        N = {},
        S = {},
        E = {},
        W = {},
        NE = {},
        NW = {},
        SE = {},
        SW = {},
        backgroundOffset = {},
        backgroundColor,
        offset = {},
        padding = {},
        scale = 1,
    } = setup

    const frame = {
        image_N: N.source || defaultFrame.test_N,
        image_S: S.source || defaultFrame.test_S,
        image_E: E.source || defaultFrame.test_E,
        image_W: W.source || defaultFrame.test_W,
        image_NE: NE.source || defaultFrame.test_NE,
        image_NW: NW.source || defaultFrame.test_NW,
        image_SE: SE.source || defaultFrame.test_SE,
        image_SW: SW.source || defaultFrame.test_SW,
    }

    const baseStyles = StyleSheet.create({
        pos: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        demoContainer: {
            backgroundColor: '#ff7100',
            color: '#000',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#000',
        },
    })

    const styles = StyleSheet.create({
        boxOuter: {
            width: width || 240,
            height: height || 120,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin,
        },
        background: {
            backgroundColor: backgroundColor || undefined,
            position: 'absolute',
            top: (backgroundOffset.top || N.height || 0) * scale,
            right: (backgroundOffset.right || E.width || 0) * scale,
            bottom: (backgroundOffset.bottom || S.height || 0) * scale,
            left: (backgroundOffset.left || W.width || 0) * scale,
        },
        container: {
            // ...baseStyles.demoContainer,
            position: 'absolute',
            paddingTop: padding.top || 10,
            paddingRight: padding.right || 10,
            paddingBottom: padding.bottom || 10,
            paddingLeft: padding.left || 10,
            top: (offset.top || N.height || 0) * scale,
            right: (offset.right || E.width || 0) * scale,
            bottom: (offset.bottom || S.height || 0) * scale,
            left: (offset.left || W.width || 0) * scale,
        },
        pos_N: {
            ...baseStyles.pos,
            left: (N.left || NW.width || 0) * scale,
            right: (N.right || NE.width || 0) * scale,
            height: N.height * scale,
            alignSelf: 'center',
            top: 0,
        },
        pos_S: {
            ...baseStyles.pos,
            left: (S.left || SW.width || 0) * scale,
            right: (S.right || SE.width || 0) * scale,
            height: S.height * scale,
            alignSelf: 'center',
            bottom: 0,
        },
        pos_E: {
            ...baseStyles.pos,
            width: E.width * scale,
            top: (NE.height || 0) * scale,
            bottom: (SE.height || 0) * scale,
            right: (E.right || 0) * scale,
        },
        pos_W: {
            ...baseStyles.pos,
            width: W.width * scale,
            top: (NW.height || 0) * scale,
            bottom: (SW.height || 0) * scale,
            left: (W.left || 0) * scale,
        },
        pos_NE: {
            ...baseStyles.pos,
            width: NE.width * scale,
            height: NE.height * scale,
            top: 0,
            right: 0,
        },
        pos_SE: {
            ...baseStyles.pos,
            width: SE.width * scale,
            height: SE.height * scale,
            bottom: 0,
            right: 0,
        },
        pos_SW: {
            ...baseStyles.pos,
            width: SW.width * scale,
            height: SW.height * scale,
            bottom: 0,
            left: 0,
        },
        pos_NW: {
            ...baseStyles.pos,
            width: NW.width * scale,
            height: NW.height * scale,
            top: 0,
            left: 0,
        },
    })

    return (
        <View style={styles.boxOuter}>
            <View style={styles.background} />
            {
                [N, E, S, W, NE, NW, SE, SW].map((loc) => (
                    <ImageBackground
                        source={frame[`image_${loc.id}`]}
                        key={loc.id}
                        style={styles[`pos_${loc.id}`]}
                    />
                ))
            }
            {decorations && decorations.map((decoration, index) => {
                const key = `key_${index}`
                return (<Fragment key={key}>{decoration}</Fragment>)
            })}
            <View style={styles.container}>
                {children}
            </View>
        </View>
    )
}

Box.defaultProps = {
    children: undefined,
    decorations: undefined,
}

Box.propTypes = {
    children: PropTypes.node,
    decorations: PropTypes.array,
    setup: PropTypes.object.isRequired,
}

export default Box
