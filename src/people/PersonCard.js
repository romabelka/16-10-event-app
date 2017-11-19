import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import Card from '../common/Card'

class PersonCard extends Component {
    static propTypes = {};

    render() {
        const {person} = this.props
        return (
            <Card>
                <Text>{person.firstName} - {person.lastName}</Text>
            </Card>
        )
    }
}

const styles = StyleSheet.create({})

export default PersonCard
