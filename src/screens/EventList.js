import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import EventList from '../events/EventList'
import {eventList} from '../fixtures'
import {observer, inject} from 'mobx-react'

@inject('events')
@observer
class EventListScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'event list'
    }

    componentDidMount() {
        this.props.events.getAll()
    }

    render() {
        return (
            <EventList events = {this.props.events.entities}/>
        )
    }
}

const styles = StyleSheet.create({
})

export default EventListScreen