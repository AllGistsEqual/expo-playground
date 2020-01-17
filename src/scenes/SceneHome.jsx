import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ImageBackground, Text } from 'react-native'
import { blueprint } from '../../assets'
import NavigationButton from '../components/NavigationButton'
import Panel from '../components/Panel'
import styles from '../styles'
import BoxSimple from '../demo/BoxSimple'
import BoxImageBackground from '../demo/BoxImageBackground'
import ButtonTouchableOpacity from '../demo/ButtonTouchableOpacity'

const SceneHome = ({ applicationState: { version, name } }) => (
    <ImageBackground source={blueprint} resizeMode="repeat" style={styles.container}>

        <Panel title={`${name} (v${version})`}>
            <NavigationButton
                title="go to Settings >>"
                target="Settings"
            />
        </Panel>

        <ButtonTouchableOpacity>
            <Text>ButtonTouchableOpacity</Text>
        </ButtonTouchableOpacity>

        <BoxImageBackground>
            <Text>Box Image Background</Text>
        </BoxImageBackground>

        <BoxSimple>
            <Text>Box Simple</Text>
        </BoxSimple>

    </ImageBackground>
)

SceneHome.propTypes = {
    applicationState: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    applicationState: state.application,
})

export default connect(
    mapStateToProps,
)(SceneHome)
