import React, { Component } from 'react'
import {Text} from 'react-native'
import Card from '../common/Card'

class PeopleCard extends Component {
    render() {
        const { person } = this.props;
        return (
            <Card>
                <Text >{person.firstName} {person.lastName}</Text>
            </Card>
        )
    }
}

export default PeopleCard