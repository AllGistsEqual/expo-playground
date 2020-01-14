import { Button } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

const handlePress = (navigation, target) => {
    navigation.navigate(target)
}

const NavigationButton = ({
    navigation,
    target,
    title,
}) => (
    <Button
        onPress={() => handlePress(navigation, target)}
        color="#ff7100"
        title={title}
    />
)

NavigationButton.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    target: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default withNavigation(NavigationButton)
