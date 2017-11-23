import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import Event from '../../events/Event'
import {observer, inject} from 'mobx-react'

@inject('events') @observer
class EventScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.uid
    })

    render() {
        const {events, navigation} = this.props
        const event = events.entities[navigation.state.params.uid]
        return <Event event = {event}/>
    }
}

const styles = StyleSheet.create({
})

export default EventScreen