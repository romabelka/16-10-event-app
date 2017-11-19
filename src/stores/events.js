import {observable, action, autorun} from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'
import {fbToEntities} from '../utils'

class EventsStore extends BaseStore {
    @observable entities = null

    constructor(...args) {
        super(...args)

        autorun(() => {
            this.fetchAllEvents()
        })
    }

    fetchAllEvents() {
        const eventsRef = firebase.database().ref('events')

        eventsRef.on('value', (snapshot) => {
            this.updateEvents(snapshot.val())
        })
    }

    @action updateEvents = events => {
        this.entities = fbToEntities(events)
    }
}

export default EventsStore