import {observable, action, autorun} from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'

class AuthStore extends BaseStore {
    @observable user = null

    constructor(...args) {
        super(...args)

        autorun(() => {
            const routeName = this.user ? 'lists' : 'auth'
            this.getStore('navigation').navigate(routeName)
            console.log('---', routeName)
            //navigate to routeName
        })
/*
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                //do navigation
            }
        })
*/
    }

    signIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.setUser)
    }

    @action setUser = user => this.user = user
}

export default AuthStore