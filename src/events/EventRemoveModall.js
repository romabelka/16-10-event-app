import React, {Component} from 'react'
import {View, StyleSheet, TouchableHighlight, Text, Modal} from 'react-native'

export default class Root extends Component {
    state = {
        modalVisible: false
    };

    handleRemovePress = () => {
        this.setModalVisible(true);
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.handleRemovePress} style={styles.button}>
                    <Text style={styles.buttonInner}>Button</Text>
                </TouchableHighlight>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.")
                    }}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                margin: 20
                            }}>Are you sure?</Text>

                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text style={{
                                    marginLeft: 20
                                }}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
        borderColor: '#d6d7da',
        backgroundColor: '#3498db'
    },
    buttonInner: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 50,
        color: '#fff',
    }
})


