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
        temp: {
            width: 40,
            height: 40,
            backgroundColor: '#ccc',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#ff7100',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    })

    return (
        <View style={styles.boxOuter}>
            {
                [N, E, S, W, NE, NW, SE, SW].map((loc) => (
                    <View
                        key={loc.id}
                        style={styles.temp}
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
