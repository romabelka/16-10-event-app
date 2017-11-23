import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject('people') @observer
class Person extends Component {
    get snapshot() {
        return this.props.people.snapshot
    }

    bringInCamera() {
        this.props.people.stores.navigation.navigate('camera', {
            onCancel: () => {
                this.props.people.stores.navigation.back()
            },
            onShot: snapshot => {
                this.props.people.stores.navigation.back()
                this.props.people.setSnapshot(snapshot)
            },
        })
    }

    render() {
        const { email, firstName, lastName } = this.props.people.selectedPerson

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    {this.renderAvatar()}
                    <Text style={styles.name}>{firstName} {lastName}</Text>
                    {this.renderSetAvatarButton()}
                </View>
            </View>
        )
    }

    renderAvatar() {
        if (!this.snapshot) {
            return null
        }

        const { uri, width, height } = this.snapshot
        const ratio = width / height

        const props = {
            source: {uri},
            style: {
                width: 300,
                height: 300 / ratio,
            },
        }

        return <Image {...props} />
    }

    renderSetAvatarButton() {
        if (this.snapshot) {
            return null
        }

        return <Button title="Use camera to set up your avatar" onPress={this.bringInCamera.bind(this)} />
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