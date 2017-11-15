import React, { Component } from 'react'
import {Button, View, Text, Image, StyleSheet} from 'react-native'
import Confirm from './Confirm'

class EventScreen extends Component {
    static propTypes = {

    };

    state = {
        modalVisible: false,
    }

    handleDelete = () => {
        this.setState({modalVisible: true})
    }

    handleConfirm = () => {
        this.setState({modalVisible: false})
    }

    handleCancel = () => {
        this.setState({modalVisible: false})
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
                <Button
                    title="Delete"
                    onPress={this.handleDelete}
                />

                <Confirm
                    visible={this.state.modalVisible}
                    handleConfirm={this.handleConfirm}
                    handleCancel={this.handleCancel}
                />
            </View>
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