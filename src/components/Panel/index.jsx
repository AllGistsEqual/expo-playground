import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    Platform,
} from 'react-native'

const Panel = ({ title, style, children }) => {
    const { OS } = Platform
    const baseStyle = {
        shadowColor: '#000000',
        shadowOffsetWidth: 3,
        shadowOffsetHeight: 3,
        shadowOpacity: 0.1,
        shadowRadius: 3,
        backgroundColor: '#ffffff',
        padding: 5,
        margin: 10,
        borderRadius: 3,
        width: 300,
        elevation: 3,
    }
    const {
        width,
        margin,
        padding,
        borderRadius,
        shadowColor,
        shadowOpacity,
        shadowRadius,
        shadowOffsetWidth,
        elevation,
        backgroundColor,
    } = baseStyle

    const container = {
        shadowOffset: {
            width: Platform.OS === 'ios' ? shadowOffsetWidth : 0,
            height: Platform.OS === 'ios' ? shadowOffsetWidth : 0,
        },
        width,
        margin,
        shadowColor,
        shadowOpacity,
        shadowRadius,
        elevation: OS === 'android' ? elevation : undefined,
    }
    const content = {
        backgroundColor,
        overflow: 'hidden',
        padding,
        width,
        borderRadius,
    }

    return (
        <View style={container}>
            <View style={content}>
                <Text>{ title }</Text>
                { children }
            </View>
        </View>
    )
}

Panel.defaultProps = {
    title: undefined,
    style: undefined,
    children: (<Text>Lorem Ipsum</Text>),
}
Panel.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}

export default Panel
