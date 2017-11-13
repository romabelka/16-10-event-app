import React, {Component} from 'react'
//import {View} from 'react-native'
//import HelloWorld from './HelloWorld'
//import Auth from './auth/SignIn'
//import EventScreen from './events/EventScreen'
import EventList from './events/EventList'
import {eventList} from './fixtures'

export default class Root extends Component {
    render() {
        return (
            <EventList events = {eventList} />
        )
    }
}