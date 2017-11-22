import React, { Component } from 'react'
import {inject, observer, Observer} from 'mobx-react'
import {TouchableOpacity, Text, SectionList, ActivityIndicator, StyleSheet} from 'react-native'
import PersonCard from './PersonCard'

@inject('people')
@observer
class PeopleList extends Component {
    /*static defaultProps = {
        onPersonPress: () => {}
    };*/

    currySelectPerson(person) {
        return () => {
            this.props.people.selectPerson(person)
            this.props.people.stores.navigation.navigate('person', {})
        }
    }

    componentDidMount() {
        const {people} = this.props
        if (!people.loaded) people.loadAll()
    }

    render() {
        const {people} = this.props
        if (people.loading) return <ActivityIndicator size='large'/>

        return <SectionList
            sections = {people.sections}
            renderSectionHeader = {({section}) => <Text style={styles.header}>{section.title}</Text>}
            renderItem = {({item}) => <TouchableOpacity onPress = {this.currySelectPerson(item.person)}>
                <Observer>{() => <PersonCard person = {item.person} />}</Observer>
            </TouchableOpacity>}
        />
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F0F0F0',
        height: 40,
        lineHeight: 40,
        marginBottom: 5,
        shadowOffset: {
            height: 2, width: 0
        },
        shadowOpacity: 0.3,
        elevation: 3
    }
})

export default PeopleList