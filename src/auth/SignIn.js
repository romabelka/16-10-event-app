import React, { Component } from 'react'
import {View, Text, TextInput, Platform} from 'react-native'

class SignIn extends Component {
    static propTypes = {

    };

    state = {
        email: '',
        password: ''
    }

    render() {
        const {email, password} = this.state
        return (
            <View style = {styles.container}>
                <Text>Please Sign In</Text>
                <View>
                    <Text>Email:</Text>
                    <TextInput
                        style = {styles.input}
                        value = {email}
                        onChangeText = {this.changeEmail}
                        keyboardType = 'email-address'
                    />
                </View>
                <View>
                    <Text>Password:</Text>
                    <TextInput
                        style = {styles.input}
                        value = {password}
                        onChangeText = {this.changePassword}
                        secureTextEntry
                    />
                </View>
            </View>
        )
    }

    changeEmail = email => this.setState({ email })
    changePassword = password => this.setState({ password })
}

const styles = {
    container: {
        backgroundColor: '#F00',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        ...Platform.select({
            ios: {
                borderBottomColor: '#000',
                borderBottomWidth: 1
            },
            android: {

            }
        })
    }
}

export default SignIn