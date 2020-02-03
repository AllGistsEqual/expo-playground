import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import AppLoadingScreen from '../scenes/AppLoadingScreen'
import SceneHome from '../scenes/SceneHome'
import SceneLogin from '../scenes/SceneLogin'
import SceneLogOut from '../scenes/SceneLogout'
import SceneRegister from '../scenes/SceneRegister'
import SceneGameHome from '../scenes/SceneGameHome'
import SceneGameUser from '../scenes/SceneGameUser'
import SceneGameRanking from '../scenes/SceneGameRanking'

const AuthStack = createStackNavigator(
    {
        Home: SceneHome,
        Login: SceneLogin,
        Logout: SceneLogOut,
        Register: SceneRegister,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
)

const AppStack = createStackNavigator(
    {
        Game: SceneGameHome,
        User: SceneGameUser,
        Ranking: SceneGameRanking,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Game',
    }
)

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {
            AppLoading: AppLoadingScreen,
            Auth: AuthStack,
            App: AppStack,
        },
        {
            initialRouteName: 'AppLoading',
        }
    )
)

export default createAppContainer(AppNavigator)
