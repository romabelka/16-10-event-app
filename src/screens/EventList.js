import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import EventList from '../events/EventList'
import {observer, inject} from 'mobx-react'

@inject('events') @observer
class EventListScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'Events list'
    }

    componentWillMount() {
        this.props.events.getAll();
    }

    render() {
        return (
            <EventList events = {this.props.events.list}/>
        )
    }
}

const styles = StyleSheet.create({
})

export default EventListScreen