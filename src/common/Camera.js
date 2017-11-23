import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { Permissions, Camera as ExpoCamera } from 'expo'

class Camera extends Component {
    state = {
        hasCameraPermission: null,
        type: ExpoCamera.Constants.Type.front,
    }

    static navigationOptions = {
        title: 'Camera',
        header: () => null,
        /*transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
                timing: Animated.timing,
                easing: Easing.step0,
            },
        }),*/
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    get onCancel() {
        return this.props.navigation.state.params.onCancel
    }

    get onShot() {
        return this.props.navigation.state.params.onShot
    }

    async handleShot() {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync({
                quality: 0.5,
                base64: true,
                exif: false,
            });

            this.onShot(photo)
        }
    }

    render() {
        const { hasCameraPermission } = this.state

        if (hasCameraPermission === null) {
            return this.renderBlackScreen()
        }

        if (hasCameraPermission === false) {
            return this.renderNoAccess()
        }

        return (
            <ExpoCamera style={styles.container} type={this.state.type} ref={ref => { this.camera = ref; }}>
                <View style={styles.container}>
                    {this.renderCancelButton()}
                    {this.renderShotButton()}
                </View>
            </ExpoCamera>
        )
    }

    renderBlackScreen() {
        return <View style={{...styles.container, ...styles.blackBg}} />
    }

    renderNoAccess() {
        return (
            <View style={styles.noAccess}>
                <View>
                    <Text style={styles.alertText}>Camera permission not granted</Text>
                    <Button title="Get back" onPress={this.onCancel} />
                </View>
            </View>
        )
    }

    renderCancelButton() {
        return (
            <View style={styles.blackBg}>
                <TouchableOpacity style={styles.cancelButton} onPress={this.onCancel}>
                    <Text style={styles.cancelButtonText}>×</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderShotButton() {
        return (
            <View style={styles.blackBg}>
                <TouchableOpacity style={styles.shotButton} onPress={this.handleShot.bind(this)}>
                    <Text style={styles.shotButtonText}>⚪</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Camera

const styles = {
    blackBg: {
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
    },
    noAccess: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    cancelButton: {
        paddingTop: 32,
        paddingBottom: 24,
        paddingLeft: 20,
        width: '100%',
        backgroundColor: '#000',
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 40,
    },
    shotButton: {
        width: '100%',
        paddingBottom: 32,
        paddingTop: 24,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
    },
    shotButtonText: {
        fontSize: 80,
        color: 'red',
    },
    alertText: {
        fontSize: 20,
    },
}
