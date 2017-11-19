import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import { observer, inject } from 'mobx-react'
import EventList from '../events/EventList'
// import {eventList} from '../fixtures'

@inject('events') @observer
class EventListScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'event list'
    }

    componentDidMount() {
        this.props.events.loadEvents()
    }

    render() {
        return (
            <EventList events = {this.props.events.eventList} />
        )
    }
}

const styles = StyleSheet.create({
})

export default EventListScreen