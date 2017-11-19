import React from 'react'
import './src/fbSetup'
import {addNavigationHelpers} from 'react-navigation'
import AppNavigator from './src/AppNavigator'
import {Provider, observer} from 'mobx-react'
import {useStrict} from 'mobx'
import stores from './src/stores'
useStrict()

@observer
export default class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <AppNavigator navigation = {addNavigationHelpers({
                    dispatch: stores.navigation.dispatch,
                    state: stores.navigation.state
                })}/>
            </Provider>
        )
    }
}
