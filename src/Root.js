import React, {Component} from 'react'
//import {View} from 'react-native'
//import HelloWorld from './HelloWorld'
//import Auth from './auth/SignIn'
import EventScreen from './events/EventScreen'
import {eventList} from './fixtures'

export default class Root extends Component {
    render() {
        return (
            <EventScreen event = {eventList[0]} />
        )
    }
}