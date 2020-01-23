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
            width: 40,
            height: 40,
            backgroundColor: '#ccc',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#ff7100',
        },
    })
    const styles = StyleSheet.create({
        boxOuter: {
            width: width || 240,
            height: height || 120,
            margin: margin || 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#000',
        },
        posN: {
            ...base.pos,
            alignSelf: 'center',
            top: 0,
        },
        posS: {
            ...base.pos,
            alignSelf: 'center',
            bottom: 0,
        },
        posE: {
            ...base.pos,
            right: 0,
        },
        posW: {
            ...base.pos,
            left: 0,
        },
        posNE: {
            ...base.pos,
            top: 0,
            right: 0,
        },
        posSE: {
            ...base.pos,
            bottom: 0,
            right: 0,
        },
        posSW: {
            ...base.pos,
            bottom: 0,
            left: 0,
        },
        posNW: {
            ...base.pos,
            top: 0,
            left: 0,
        },
    })

    return (
        <View style={styles.boxOuter}>
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
