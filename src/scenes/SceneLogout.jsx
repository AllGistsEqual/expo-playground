import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLogin, userLogout } from '../redux/actions/user.actions'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'

const SceneLogOut = ({ navigation, logout }) => {
    useEffect(() => { logout() }, [logout])

    return (
    <DefaultPage isHome>
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>LOGGED OUT!</Text>
            </View>
            <View style={styles.headerPanel}>
                <Text>
                    We are sad to see you go but should you want to return, we&apos;re gonna leave
                    a light on for you, UK.
                </Text>
                <Button
                    title="SIGN ME IN AGAIN"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </Panel>
    </DefaultPage>
    )
}

const mapDispatchToProps = (dispatch) => ({
    logout: (name) => dispatch(userLogout({ name })),
})

SceneLogOut.propTypes = {
    logout: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}

export default connect(null, mapDispatchToProps)(SceneLogOut)
