import { Button } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const NavigationButton = ({
    title,
}) => (
    <Button
        color="#ff7100"
        title={title}
    />
)

NavigationButton.propTypes = {
    title: PropTypes.string.isRequired,
}

export default NavigationButton
