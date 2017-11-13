import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

class EventScreen extends Component {
    static propTypes = {

    };

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