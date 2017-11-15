import React, { Component } from 'react'
import {View, ScrollView, StyleSheet, SectionList, Text} from 'react-native'
import EventCard from './EventCard'
import {alphabeticalSort} from '../utils';

class EventList extends Component {
    static propTypes = {

    };

    generateCharsList = (events) => {
        const charsObj = {};

        events.forEach(event => {
          const eventChar = event.title.charAt(0).toLowerCase();
          if (charsObj[eventChar] !== undefined) {
            charsObj[eventChar].data.push(event);
          } else {
            charsObj[eventChar] = {
              data: [event],
              char: eventChar
            }
          }
        });

        const asArray = Object.values(charsObj);

        return alphabeticalSort(asArray, 'char');
    };

    render() {
        const data = this.generateCharsList(this.props.events);

        return (
            <SectionList
              renderSectionHeader={({section}) => <Text style={styles.header}>
                {section.char.toUpperCase()} - {section.data.length} events
                </Text>}
              renderItem={({item}) => {
                return <EventCard key={item.uid} event={item} />
              }}
              sections={data}/>
        )
    }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  }
})

export default EventList

// <ScrollView>
// <View>
// {this.props.events.map(event =>
//   <EventCard event = {event} key = {event.uid} />
// )}
// </View>
// </ScrollView>