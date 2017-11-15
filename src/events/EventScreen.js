import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Button} from 'react-native'
import Confirm from '../common/Confirm'

class EventScreen extends Component {
    static propTypes = {

    };

    state = {
        deleteProcess: false
    }

    curryDeleteEvent(uid) {
        return () => {
            console.log('--- delete event', uid)
            this.hideConfirmation()
        }
    }

    showConfirmation() {
        this.setState({deleteProcess: true})
    }

    hideConfirmation() {
        this.setState({deleteProcess: false})
    }

    render() {
        const {event} = this.props
        return (
            <View>
                <Image source = {{uri: 'http://lorempixel.com/400/200/technics/'}}
                    style = {styles.image}
                />
                <Text>{event.title}</Text>
                <Text>{event.where}</Text>
                <Text>{event.url}</Text>
                {this.renderDeleteButton()}
                {this.renderConfirmation(event.uid)}
            </View>
        )
    }

    renderDeleteButton() {
        const { event } = this.props

        return <Button
            accessibilityLabel={`Press to delete event "${event.title}"`}
            title="Delete"
            onPress={this.showConfirmation.bind(this)}
            color='red'
        />
    }

    renderConfirmation(uid) {
        return (
            <Confirm visible={this.state.deleteProcess}>
                <Text>Do you want to delete the event?</Text>
                <Button title="Yes" color="red" onPress={this.curryDeleteEvent(uid)} />
                <Button title="Cancel" onPress={this.hideConfirmation.bind(this)} />
            </Confirm>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200
    }
})

export default EventScreen