import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

const TopUserBar = ({ navigation, storedUserName }) => (
    <View style={styles.topBar}>
        <Text>
            {`Logged in as ${storedUserName}`}
        </Text>
        <Button
            title="Logout"
            type="clear"
            icon={{
                name: 'exit-to-app',
                size: 25,
                color: 'lightblue',
            }}
            iconRight
            onPress={() => navigation.navigate('Logout')}
        />
    </View>
)

const styles = StyleSheet.create({
    topBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

const mapStateToProps = (state) => ({
    storedUserName: state.user.name,
})

TopUserBar.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
    storedUserName: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(withNavigation(TopUserBar))
