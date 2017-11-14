import React, { Component } from 'react';
import { View, SectionList, StyleSheet, Text } from 'react-native';
import EventCard from './EventCard';

class EventList extends Component {
  static propTypes = {};

  sortByTitle = () => {
    const sections = {};
    this.props.events.forEach(event => {
      const titleChar = event.title[0].toUpperCase();
      if (!sections[titleChar]) {
        sections[titleChar] = {
          title: titleChar,
          data: [event],
        };
        return;
      }
      sections[titleChar].data.push(event);
    });

    return Object.values(sections).sort((a, b) => {
      if(a.title < b.title) {
        return -1
      }
      if(a.title > b.title) {
        return 1
      }
      return 0
    })
  };

  render() {
    return (
      <SectionList
        sections={this.sortByTitle()}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({ item: event }) => {
          return <EventCard event={event} />;
        }}
        keyExtractor={item => item.uid}
      />
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

export default EventList;
