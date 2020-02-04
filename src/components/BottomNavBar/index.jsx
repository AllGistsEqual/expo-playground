import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

const BottomNavBar = ({ navigation }) => (
    <View style={styles.bottomBar}>
        <Button
            title=" Play"
            type="clear"
            icon={(
                <Icon
                    name="address-card"
                    size={15}
                    color="lightblue"
                />
            )}
            onPress={() => navigation.navigate('Game')}
        />

        <Button
            title=" RANKING"
            type="clear"
            icon={(
                <Icon
                    name="address-card"
                    size={15}
                    color="lightblue"
                />
            )}
            onPress={() => navigation.navigate('User')}
        />

        <Button
            title=" USER"
            type="clear"
            icon={(
                <Icon
                    name="address-card"
                    size={15}
                    color="lightblue"
                />
            )}
            onPress={() => navigation.navigate('Ranking')}
        />
    </View>
)

const styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
    },
})

BottomNavBar.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
}

export default withNavigation(BottomNavBar)
