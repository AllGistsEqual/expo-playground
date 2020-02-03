import {
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
    },
    containerCentered: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    constrainer: {
        flexGrow: 1,
        alignItems: 'center',
    },
    constrainerCentered: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerPanel: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        flex: 1,
        fontWeight: 'bold',
    },
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleBox: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBox: {
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        width: '100%',
        height: '10%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})

export default styles
