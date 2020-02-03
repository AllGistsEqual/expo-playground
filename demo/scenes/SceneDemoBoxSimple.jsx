import React from 'react'
import { Text } from 'react-native'
import DemoPage from '../../src/components/DemoPage'
import ButtonTouchableOpacity from '../components/ButtonTouchableOpacity'
import BoxImageBackground from '../components/BoxImageBackground'
import BoxSimple from '../components/BoxSimple'

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
