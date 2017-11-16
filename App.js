import React from 'react'
import './src/fbSetup'
import AppNavigator from './src/AppNavigator'
import {useStrict} from 'mobx'
useStrict()

export default class App extends React.Component {
    render() {
        return <AppNavigator />
    }
}
