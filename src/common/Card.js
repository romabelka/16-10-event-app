import React, { Component } from 'react'
import {View, StyleSheet, Platform} from 'react-native'

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
        marginBottom: 15,
        backgroundColor: '#FDFDFD',
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 5,
                shadowOpacity: 1.0
            },
            android: {
                elevation: 5,
            }
        })
    }
})

export default Card