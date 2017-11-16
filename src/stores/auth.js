import {observable, action, autorun} from 'mobx'
import firebase from 'firebase'

class AuthStore {
    @observable user = null

    constructor() {

        autorun(() => {
            const routeName = this.user ? 'eventList' : 'auth'
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

export default new AuthStore()