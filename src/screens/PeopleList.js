import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import PeopleList from '../people/PeopleList'
import {observer, inject} from 'mobx-react'

@inject('people')
@observer
class PeopleListScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'people list'
    }

    componentDidMount() {
        this.props.people.getAll()
    }

    render() {
        return (
            <PeopleList people = {this.props.people.entities}/>
        )
    }
}

const styles = StyleSheet.create({
})

export default PeopleListScreen