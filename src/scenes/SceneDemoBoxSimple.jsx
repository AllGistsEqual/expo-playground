import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../components/DemoPage'
import ButtonTouchableOpacity from '../demo/ButtonTouchableOpacity'
import BoxImageBackground from '../demo/BoxImageBackground'
import BoxSimple from '../demo/BoxSimple'

const SceneHome = () => (
    <DemoPage>
        <ButtonTouchableOpacity>
            <Text>ButtonTouchableOpacity</Text>
        </ButtonTouchableOpacity>

        <BoxImageBackground>
            <Text>Box Image Background</Text>
        </BoxImageBackground>

        <BoxSimple>
            <Text>Box Simple</Text>
        </BoxSimple>
    </DemoPage>
)

export default SceneHome
