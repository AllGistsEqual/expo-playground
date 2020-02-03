import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, CheckBox, Input } from 'react-native-elements'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'

const SceneLogin = () => (
    <DefaultPage isHome>
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>LOGIN</Text>
            </View>
            <View style={styles.headerPanel}>
                <Input
                    placeholder="USER NAME OR EMAIL"
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
                    title="GO GO GO"
                />
            </View>
        </Panel>
    </DefaultPage>
)

export default SceneLogin
