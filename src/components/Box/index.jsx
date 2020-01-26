import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native'

const Box = ({ children, setup }) => {
    const {
        width,
        height,
        margin,
        backgroundColor = '#fff',
        backgroundOffset = {},
        scale = 1,
        N = { id: 'N' },
        S = { id: 'S' },
        E = { id: 'E' },
        W = { id: 'W' },
        NE = { id: 'NE' },
        NW = { id: 'NW' },
        SE = { id: 'SE' },
        SW = { id: 'SW' },
    } = setup
    const base = StyleSheet.create({
        pos: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
    const styles = StyleSheet.create({
        boxOuter: {
            width: width ?? 240,
            height: height ?? 120,
            margin: margin ?? 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        background: {
            backgroundColor: backgroundColor || undefined,
            position: 'absolute',
            top: (backgroundOffset.top ?? N.height ?? 0) * scale,
            right: (backgroundOffset.right ?? E.width ?? 0) * scale,
            bottom: (backgroundOffset.bottom ?? S.height ?? 0) * scale,
            left: (backgroundOffset.left ?? W.width ?? 0) * scale,
        },
        posN: {
            ...base.pos,
            height: (N.height ?? 20) * scale,
            alignSelf: 'center',
            left: (N.left ?? NW.width ?? 0) * scale,
            right: (N.right ?? NE.width ?? 0) * scale,
            top: (N.top ?? 0) * scale,
        },
        posS: {
            ...base.pos,
            height: (S.height ?? 20) * scale,
            alignSelf: 'center',
            left: (S.left ?? SW.width ?? 0) * scale,
            right: (S.right ?? SE.width ?? 0) * scale,
            bottom: (S.bottom ?? 0) * scale,
        },
        posE: {
            ...base.pos,
            width: (E.width ?? 20) * scale,
            top: (NE.height ?? 0) * scale,
            bottom: (SE.height ?? 0) * scale,
            right: (E.right ?? 0) * scale,
        },
        posW: {
            ...base.pos,
            width: (W.width ?? 20) * scale,
            top: (NW.height ?? 0) * scale,
            bottom: (SW.height ?? 0) * scale,
            left: (W.left ?? 0) * scale,
        },
        posNE: {
            ...base.pos,
            width: (NE.width ?? 40) * scale,
            height: (NE.height ?? 40) * scale,
            top: (NE.top ?? 0) * scale,
            right: (NE.right ?? 0) * scale,
        },
        posSE: {
            ...base.pos,
            width: (SE.width ?? 40) * scale,
            height: (SE.height ?? 40) * scale,
            bottom: (SE.bottom ?? 0) * scale,
            right: (SE.right ?? 0) * scale,
        },
        posSW: {
            ...base.pos,
            width: (SW.width ?? 40) * scale,
            height: (SW.height ?? 40) * scale,
            bottom: (SW.bottom ?? 0) * scale,
            left: (SW.left ?? 0) * scale,
        },
        posNW: {
            ...base.pos,
            width: (NW.width ?? 40) * scale,
            height: (NW.height ?? 40) * scale,
            top: (NW.top ?? 0) * scale,
            left: (NW.left ?? 0) * scale,
        },
    })

    return (
        <View style={styles.boxOuter}>
            <View style={styles.background} />
            {
                [N, E, S, W, NE, NW, SE, SW].map((loc) => (
                    <ImageBackground
                        source={loc.source}
                        key={loc.id}
                        style={styles[`pos${loc.id}`]}
                    />
                ))
            }
            {children}
        </View>
    )
}

const defaultSetup = {
    width: 240,
    height: 120,
    margin: 10,
}

Box.defaultProps = {
    children: undefined,
    setup: defaultSetup,
}

Box.propTypes = {
    children: PropTypes.node,
    setup: PropTypes.object,
}

export default Box
