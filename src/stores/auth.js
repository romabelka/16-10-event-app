import {observable, action, autorun} from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'

class AuthStore extends BaseStore {
    @observable user = null

    constructor(...args) {
        super(...args)

        autorun(() => {
            const routeName = this.user ? 'lists' : 'auth'
            this.getStore('navigation').reset(routeName)
        })
        firebase.auth().onAuthStateChanged(this.setUser)
    }

    signIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    @action setUser = user => this.user = user
}

export default AuthStore