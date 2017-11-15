import React, { Component } from 'react'
import {SectionList, Text, StyleSheet} from 'react-native'
import EventCard from './EventCard'
import _ from 'lodash'

class EventList extends Component {
    static propTypes = {

    };

    render() {

        const sections = _
            .chain(this.props.events)
            .orderBy(['title', 'when'])
            .groupBy(item => item.title.charAt(0))
            .reduce((acc, next, index) => {
                acc.push({key: index, data: next})
                return acc
            }, [])
            .value()

        return (
            <SectionList
                sections={sections}
                renderItem={({item}) => <EventCard event={item} />}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.key}</Text>}
            >
            </SectionList>
        )
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 50,
        backgroundColor: '#ccc',
    }
})

export default EventList