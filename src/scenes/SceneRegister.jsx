import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input, CheckBox, Button } from 'react-native-elements'
import Panel from '../components/Panel'
import DefaultPage from '../components/DefaultPage'
import styles from '../styles'

const SceneRegister = () => (
    <DefaultPage isHome>
        <Panel>
            <View style={styles.headerPanel}>
                <Text style={styles.headline}>SIGN UP</Text>
            </View>
            <View style={styles.headerPanel}>
                <Input
                    placeholder="USER NAME"
                    name="USER"
                    leftIcon={(
                        <Icon
                            name="user"
                            size={24}
                            color="black"
                        />
                    )}
                />
                <Input
                    placeholder="EMAIL"
                    name="MAIL"
                    leftIcon={(
                        <Icon
                            name="envelope"
                            size={24}
                            color="black"
                        />
                    )}
                />

                <Input
                    placeholder="PASSWORD"
                    name="PASSWORD"
                    leftIcon={(
                        <Icon
                            name="lock"
                            size={24}
                            color="black"
                        />
                    )}
                />

                <Input
                    placeholder="CONFIRM PASSWORD"
                    name="PASSWORDCONFIRM"
                    leftIcon={(
                        <Icon
                            name="lock"
                            size={24}
                            color="black"
                        />
                    )}
                />
                <CheckBox
                    title="Send me mail spam, please!"
                    name="SPAM"
                    checked={false}
                />
                <Button
                    title="SIGN ME UP!"
                />
            </View>
        </Panel>
    </DefaultPage>
)

export default SceneRegister
