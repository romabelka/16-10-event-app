import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import PeopleList from '../../people/PeopleList'
// import {text, email} from 'react-native-communications'

@inject('people')
@observer
class PeopleListScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'People List'
    }

    componentDidMount() {
        const {people} = this.props
        if (!people.loaded && !people.loading) people.loadAll()
    }

    render() {
        const {people} = this.props
        if (people.loading) return this.getLoader()
        return <PeopleList />
    }

    /*hadlePress =() => {
//        text('+123456789')
        email(['test@example.com'], null, null, null, null)
    }*/

    getLoader() {
        return <View><ActivityIndicator size='large'/></View>
    }
}

const styles = StyleSheet.create({
})

export default PeopleListScreen