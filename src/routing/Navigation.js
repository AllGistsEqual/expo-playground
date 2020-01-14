import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AppLoadingScreen from '../scenes/AppLoadingScreen'
import SceneHome from '../scenes/SceneHome'
import SceneSettings from '../scenes/SceneSettings'

const AppStack = createStackNavigator(
    {
        Home: SceneHome,
        Settings: SceneSettings,
    },
    {
        headerMode: 'none',
    }
)

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {
            AppLoading: AppLoadingScreen,
            App: AppStack,
        },
        {
            initialRouteName: 'App', // set 'AppLoading' for loading screen
        }
    )
)

export default createAppContainer(AppNavigator)
