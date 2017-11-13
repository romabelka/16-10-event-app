import React, {Component} from 'react'
import {View, Image, StyleSheet} from 'react-native'
//import HelloWorld from './HelloWorld'
//import Auth from './auth/SignIn'
//import EventScreen from './events/EventScreen'
import EventList from './events/EventList'
import {eventList} from './fixtures'

export default class Root extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image
                    source = {require('../assets/images/logo.png')}
                    style = {styles.logo}
                    resizeMode={Image.resizeMode.contain}
                />
                <EventList events = {eventList} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 100
    },
    container: {
        marginTop: 100,
        width: '100%'
    }
})