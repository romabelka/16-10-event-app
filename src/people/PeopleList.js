import React, { Component } from 'react'
import {View, ScrollView} from 'react-native'
import PeopleCard from './PeopleCard'

class PeopleList extends Component {
    static propTypes = {

    };

    render() {
        return <ScrollView>
            <View>
                {this.props.people.map(person =>
                    <PeopleCard person = {person} key = {person.uid} />
                )}
            </View>
        </ScrollView>
    }
}

export default PeopleList