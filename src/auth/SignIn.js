import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity, Platform} from 'react-native'
import {observable, action, useStrict} from 'mobx'
import {observer} from 'mobx-react'
import authStore from '../stores/auth'

@observer
class SignIn extends Component {
    static propTypes = {

    };

    @observable email = ''
    @observable password = ''

    render() {
        return (
            <View style = {styles.container}>
                <Text>Please Sign In</Text>
                <View>
                    <Text>Email:</Text>
                    <TextInput
                        style = {styles.input}
                        value = {this.email}
                        onChangeText = {this.changeEmail}
                        keyboardType = 'email-address'
                    />
                </View>
                <View>
                    <Text>Password:</Text>
                    <TextInput
                        style = {styles.input}
                        value = {this.password}
                        onChangeText = {this.changePassword}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity onPress = {this.handleSubmit}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handleSubmit = () => authStore.signIn(this.email, this.password)
    @action changeEmail = email => this.email = email
    @action changePassword = password => this.password = password
}

const styles = {
    container: {
        backgroundColor: '#F00',
        width: '100%',
        height: '100%',
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