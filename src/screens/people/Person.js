import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject('people') @observer
class Person extends Component {
    state = {
        cameraShown: false,
    }

    bringInCamera() {
        this.props.people.stores.navigation.navigate('camera', {
            onCancel: () => {
                this.props.people.stores.navigation.back()
            },
            onShot: photo => {
                const { base64 } = photo
                console.log('--- base64:', base64)
                this.props.people.stores.navigation.back()
            },
        })
    }

    render() {
        const { email, firstName, lastName } = this.props.people.selectedPerson

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.name}>{firstName} {lastName}</Text>
                    <Button title="Use camera to set up your avatar" onPress={this.bringInCamera.bind(this)} />
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