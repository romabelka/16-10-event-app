import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { observer, inject } from 'mobx-react'

@observer
@inject('people')
class Person extends Component {
    render() {
        const { email, firstName, lastName } = this.props.people.selectedPerson

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.name}>{firstName} {lastName}</Text>
                </View>
            </View>
        )
    }
}

export default Person

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'linen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '80%',
    },
    name: {
        fontSize: 20,
    }
})