import React, { Component } from 'react'
import {View, Text, ScrollView, StyleSheet, SectionList} from 'react-native'
import EventCard from './EventCard'
import SectionListHeader from '../common/SectionListHeader'

class EventList extends Component {
    static propTypes = {

    };

    get sections() {
        const dict = this.props.events.reduce((res, event) => {
            const firstLetter = event.title.trim().charAt(0)

            return {
                ...res,
                [firstLetter]: (res[firstLetter] || []).concat({...event, key:event.uid})
            }
        }, {})

        return Object.keys(dict)
            .map(key => ({
                title: key,
                data: dict[key].sort(this.sortByTitle),
            }))
            .sort(this.sortByTitle)
    }

    sortByTitle(a, b) {
        return a.title > b.title ? 1 : -1
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    renderSectionHeader={this.renderSectionHeader}
                    renderItem={this.renderItem}
                    sections={this.sections}
                />
            </View>
        )
    }

    renderSectionHeader({section}) {
        return (
            <SectionListHeader title={section.title} />
        )
    }

    renderItem({item}) {
        return <EventCard event={item} />
    }
}

const styles = StyleSheet.create({
    container: {
    }
})

export default EventList