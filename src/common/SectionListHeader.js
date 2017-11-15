import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class SectionListHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        marginLeft: 16,
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default SectionListHeader
