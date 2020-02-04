import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, CheckBox, Input } from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLogin } from '../redux/actions/user.actions'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'

const SceneLogin = ({
    login,
    storedUserName,
    isUserLoggedIn,
    navigation,
}) => {
    const [userName, setUserName] = useState('')
    const [status, setStatus] = useState('...')

    useEffect(() => {
        setStatus(isUserLoggedIn
            ? `Successfully logged in as ${storedUserName}`
            : '...')
        if (isUserLoggedIn) {
            setTimeout(() => {
                navigation.navigate('App')
            }, 3000)
        }
    }, [isUserLoggedIn, storedUserName])

    return (
        <DefaultPage isHome>
            <Panel>
                <View style={styles.headerPanel}>
                    <Text style={styles.headline}>LOGIN</Text>
                </View>
                <View style={styles.headerPanel}>
                    <Input
                        placeholder="USER NAME OR EMAIL"
                        onChangeText={(text) => setUserName(text)}
                        value={userName}
                        leftIcon={(
                            <Icon
                                name="user"
                                size={24}
                                color="black"
                            />
                        )}
                    />

                    <Input
                        placeholder="PASSWORD"
                        leftIcon={(
                            <Icon
                                name="lock"
                                size={24}
                                color="black"
                            />
                        )}
                    />
                    <CheckBox
                        title="Keep me signed in"
                        name="ALWAYS"
                        checked={false}
                    />
                    <Button
                        title="LOGIN"
                        onPress={() => login(userName || 'Anon')}
                    />
                    <Text>{status}</Text>
                </View>
            </Panel>
        </DefaultPage>
    )
}

const mapStateToProps = (state) => ({
    storedUserName: state.user.name,
    isUserLoggedIn: state.user.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    login: (name) => dispatch(userLogin({ name })),
})

SceneLogin.defaultProps = {
    storedUserName: '',
}

SceneLogin.propTypes = {
    login: PropTypes.func.isRequired,
    storedUserName: PropTypes.string,
    isUserLoggedIn: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SceneLogin)
