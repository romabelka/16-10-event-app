import React, { Component } from 'react'
import {StyleSheet, Text} from 'react-native'
import PeopleList from '../people/PeopleList'
import {observer, inject} from 'mobx-react'

@inject('people') @observer
class PeopleListScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'People'
    }

    componentWillMount() {
        this.props.people.getAll();
    }

    render() {
        return (
            <PeopleList people={this.props.people.list}/>
        )
    }
}

export default PeopleListScreen