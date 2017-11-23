import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity, Platform} from 'react-native'
import {observable, action, useStrict} from 'mobx'
import {observer, inject} from 'mobx-react'

@inject('auth') @observer
class SignIn extends Component {
    static propTypes = {

    };

    @observable email = ''
    @observable password = ''

    componentDidMount() {
        setTimeout(() => {
            this.email = 'ev2@asdf.com'
            this.password = 'ev2@asdf.com'
            this.handleSubmit()
        }, 100)
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.headerCtnr}>
                    <Text style={styles.headerText}>
                        Please Sign In
                    </Text>
                </View>
                <View style={styles.fieldCtnr}>
                    <Text>Email:</Text>
                    <TextInput
                        style = {styles.input}
                        value = {this.email}
                        autoCapitalize = 'none'
                        onChangeText = {this.changeEmail}
                        keyboardType = 'email-address'
                    />
                </View>
                <View style={styles.fieldCtnr}>
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

    handleSubmit = () => this.props.auth.signIn(this.email, this.password)
    @action changeEmail = email => this.email = email
    @action changePassword = password => this.password = password
}

const styles = {
    headerCtnr: {
        marginBottom: 20,
    },
    headerText: {
        fontWeight: 'bold',
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fieldCtnr: {
        marginBottom: 20,
        width: '80%',
    },
    input: {
        marginTop: 10,
        ...Platform.select({
            ios: {
                borderBottomColor: '#000',
                borderBottomWidth: 1
            },
            android: {

            }
        })
    },
}

export default SignIn
