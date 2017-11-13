import React, {Component} from 'react'
//import {View} from 'react-native'
//import HelloWorld from './HelloWorld'
import Auth from './auth/SignIn'

export default class Root extends Component {
    render() {
        return (
            <Auth/>
        )
    }
}