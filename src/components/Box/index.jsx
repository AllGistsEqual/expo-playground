import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

const Box = ({ children, setup }) => {
    const {
        width,
        height,
        margin,
        backgroundColor = '#fff',
        backgroundOffset = {},
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
            backgroundColor: '#ccc',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#ff7100',
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
            top: backgroundOffset.top ?? 0,
            right: backgroundOffset.right ?? 0,
            bottom: backgroundOffset.bottom ?? 0,
            left: backgroundOffset.left ?? 0,
        },
        posN: {
            ...base.pos,
            height: N.height ?? 20,
            alignSelf: 'center',
            left: N.left ?? NW.width ?? 0,
            right: N.right ?? NE.width ?? 0,
            top: N.top ?? 0,
        },
        posS: {
            ...base.pos,
            height: S.height ?? 20,
            alignSelf: 'center',
            left: S.left ?? SW.width ?? 0,
            right: S.right ?? SE.width ?? 0,
            bottom: S.bottom ?? 0,
        },
        posE: {
            ...base.pos,
            width: E.width ?? 20,
            top: NE.height ?? 0,
            bottom: SE.height ?? 0,
            right: E.right ?? 0,
        },
        posW: {
            ...base.pos,
            width: W.width ?? 20,
            top: NW.height ?? 0,
            bottom: SW.height ?? 0,
            left: W.left ?? 0,
        },
        posNE: {
            ...base.pos,
            width: NE.width ?? 40,
            height: NE.height ?? 40,
            top: NE.top ?? 0,
            right: NE.right ?? 0,
        },
        posSE: {
            ...base.pos,
            width: SE.width ?? 40,
            height: SE.height ?? 40,
            bottom: SE.bottom ?? 0,
            right: SE.right ?? 0,
        },
        posSW: {
            ...base.pos,
            width: SW.width ?? 40,
            height: SW.height ?? 40,
            bottom: SW.bottom ?? 0,
            left: SW.left ?? 0,
        },
        posNW: {
            ...base.pos,
            width: NW.width ?? 40,
            height: NW.height ?? 40,
            top: NW.top ?? 0,
            left: NW.left ?? 0,
        },
    })

    return (
        <View style={styles.boxOuter}>
            <View style={styles.background} />
            {
                [N, E, S, W, NE, NW, SE, SW].map((loc) => (
                    <View
                        key={loc.id}
                        style={styles[`pos${loc.id}`]}
                    >
                        <Text>{loc.id}</Text>
                    </View>
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
