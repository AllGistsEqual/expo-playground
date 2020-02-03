import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavigationButton from '../../src/components/NavigationButton'
import Panel from '../../src/components/Panel'
import DemoPage from '../../src/components/DemoPage'

const SceneDemoHome = ({ applicationState: { version, name } }) => (
    <DemoPage isHome>
        <Panel>
            <Text>{`${name} (v${version})`}</Text>
            <NavigationButton
                title="go to Settings >>"
                target="Settings"
            />
        </Panel>
        <Panel>
            <Text>Demo Links</Text>
            {[
                {
                    title: 'Simple Box >>',
                    target: 'DemoBoxSimple',
                },
                {
                    title: 'Box demo 1 >>',
                    target: 'DemoBox1',
                },
                {
                    title: 'Box demo 2 >>',
                    target: 'DemoBox2',
                },
                {
                    title: 'Box demo 3 >>',
                    target: 'DemoBox3',
                },
            ].map(({ title, target }) => (
                <NavigationButton
                    key={target}
                    title={title}
                    target={target}
                />
            ))}
        </Panel>
    </DemoPage>
)

SceneDemoHome.propTypes = {
    applicationState: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    applicationState: state.application,
})

export default connect(
    mapStateToProps,
)(SceneDemoHome)
