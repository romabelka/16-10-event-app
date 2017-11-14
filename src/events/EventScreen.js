import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, Modal } from 'react-native';

class EventScreen extends Component {
  static propTypes = {};

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
    });
  }

  render() {
    const { event } = this.props;
    return (
      <View>
        <Image
          source={{ uri: 'http://lorempixel.com/400/200/technics/' }}
          style={styles.image}
        />
        <Text>{event.title}</Text>
        <Text>{event.where}</Text>
        <Text>{event.url}</Text>
        <Button
          onPress={() => {
            this.setModalVisible(true);
          }}
          title="Delete event"
          color="#841584"
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false)
          }}
        >
          <View style={styles.modalView}>
            <Text>Are you sure you want to delete event?</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 200,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventScreen;
