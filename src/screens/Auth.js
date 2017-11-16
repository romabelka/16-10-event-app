import SignIn from '../auth/SignIn'
import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'

class AuthScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <SignIn onSubmit = {() => this.props.navigation.navigate('eventList')}/>
        )
    }
}

const styles = StyleSheet.create({
})

export default AuthScreen