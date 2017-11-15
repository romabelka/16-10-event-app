import React, {Component} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';

class Confirm extends Component {

    render() {
        return (
            <Modal
                animationType="none"
                visible={this.props.visible}
            >
                <View style={styles.wrapper}>
                    <Text>Are you sure?</Text>

                    <View style={styles.row}>
                        <Button
                            title="Confirm"
                            onPress={this.props.handleConfirm}
                        />
                        <Button
                            title="Cancel"
                            color="red"
                            onPress={this.props.handleCancel}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    row: {
        flexDirection: "row"
    }
})

export default Confirm