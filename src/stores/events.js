import {observable, action} from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'

class EventsStore extends BaseStore {
    @observable entities = {}

    @action
    getAll() {
        firebase.database().ref('events')
            .once('value').then(snapshot => {
                const events = snapshot.val()

                this.entities = Object.keys(events).map(key => ({
                    uid: key,
                    ...events[key],
                }))
            }
        )
    }

}

export default EventsStore
