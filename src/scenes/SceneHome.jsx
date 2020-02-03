import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'

const SceneHome = ({ applicationState: { version, name } }) => (
    <DefaultPage>
        <Panel title={`${name} (v${version})`}>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>HOME SCREEN</Text>
            </View>
            <View style={styles.headerPanel}>
                <Text>Welcome home, Stranger</Text>
            </View>
        </Panel>
    </DefaultPage>
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
