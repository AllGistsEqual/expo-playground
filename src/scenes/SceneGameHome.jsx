import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'
import game from '../../assets/demo/tictactoe.jpeg'
import BottomNavBar from '../components/BottomNavBar'

const SceneGameHome = ({ storedUserName }) => (
    <DefaultPage isHome>
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>PLAY TIME!</Text>
            </View>
            <View style={styles.headerPanel}>
                <Image
                    source={game}
                    style={{ width: 300, height: 300 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text>
                    {`Let's play a game, ${storedUserName}!`}
                </Text>
            </View>
        </Panel>
        <BottomNavBar />
    </DefaultPage>
)

const mapStateToProps = (state) => ({
    storedUserName: state.user.name,
})

SceneGameHome.propTypes = {
    storedUserName: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(SceneGameHome)
