import {observable, action} from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'

class PeopleStore extends BaseStore {
    @observable entities = {}

    @action
    getAll() {
        firebase.database().ref('people')
            .once('value').then(snapshot => {
                this.entities = snapshot.val()
            }
        )
    }

}

export default PeopleStore
