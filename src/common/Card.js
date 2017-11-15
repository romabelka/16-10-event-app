import React, { Component } from 'react'
import {Platform, View, StyleSheet} from 'react-native'

class Card extends Component {
    static propTypes = {

    };

    render() {
        return (
            <View style = {styles.container}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 16,
        marginRight: 16,
        padding: 4,
        borderRadius: 4,
        ...Platform.select({
            ios: {
                shadowOffset: {height: 4},
                shadowColor: '#000',
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                backgroundColor: '#FDFDFD',
                elevation: 4,
            }
        })
    }
})

export default Card