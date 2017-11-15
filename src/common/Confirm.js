import React, { Component } from 'react'
import { StyleSheet, Modal, View } from 'react-native'

class Confirm extends Component {
    render() {
        const { visible, children } = this.props

        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
            >
                <View style={styles.container}>
                    <View style={styles.box}>
                        {children}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    box: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 4,
        padding: 16,
    }
})

export default Confirm
