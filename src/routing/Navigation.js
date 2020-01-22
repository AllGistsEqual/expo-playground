import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AppLoadingScreen from '../scenes/AppLoadingScreen'
import SceneHome from '../scenes/SceneHome'
import SceneSettings from '../scenes/SceneSettings'
import SceneDemoBoxSimple from '../scenes/SceneDemoBoxSimple'
import SceneDemoBox1 from '../scenes/SceneDemoBox1'
import SceneDemoBox2 from '../scenes/SceneDemoBox2'
import SceneDemoBox3 from '../scenes/SceneDemoBox3'

const DemoStack = createStackNavigator(
    {
        Home: SceneHome,
        Settings: SceneSettings,
        DemoBoxSimple: SceneDemoBoxSimple,
        DemoBox1: SceneDemoBox1,
        DemoBox2: SceneDemoBox2,
        DemoBox3: SceneDemoBox3,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
)

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {
            AppLoading: AppLoadingScreen,
            Demo: DemoStack,
        },
        {
            initialRouteName: 'Demo', // set 'AppLoading' for loading screen
        }
    )
)

export default createAppContainer(AppNavigator)
