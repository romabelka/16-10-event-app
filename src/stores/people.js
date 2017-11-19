import {observable, action} from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'

class PeopleStore extends BaseStore {
    @observable entities = {}

    @action
    getAll() {
        firebase.database().ref('people')
            .once('value').then(snapshot => {
                const people = snapshot.val()

                this.entities = Object.keys(people).map(key => ({
                    uid: key,
                    ...people[key],
                }))
            }
        )
    }

}

export default PeopleStore
