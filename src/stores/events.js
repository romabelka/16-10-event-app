import {observable, action} from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'

class EventsStore extends BaseStore {
    @observable entities = {}

    @action
    getAll() {
        firebase.database().ref('events')
            .once('value').then(snapshot => {
            this.entities = snapshot.val()
        })
    }

}

export default EventsStore
