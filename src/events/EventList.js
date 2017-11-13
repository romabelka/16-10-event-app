import React, { Component } from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import EventCard from './EventCard'

class EventList extends Component {
    static propTypes = {

    };

    render() {
        return (
            <ScrollView>
                <View>
                    {this.props.events.map(event =>
                        <EventCard event = {event} key = {event.uid} />
                    )}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
})

export default EventList