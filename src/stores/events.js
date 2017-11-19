import { action, observable } from 'mobx'
import BaseStore from './BaseStore'
import firebase from 'firebase'

class EventsStore extends BaseStore {
    constructor(...args) {
        super(...args)
    }

    @observable isLoading = false
    @observable eventList = []

    loadEvents() {
        this.setLoading(true)

        firebase.database().ref('events').once('value')
            .then(this.assignEvents.bind(this))
    }

    @action
    setLoading(bool) {
        this.isLoading = bool
    }

    @action
    assignEvents(snapshot) {
        this.setLoading(false)

        const events = snapshot.val()

        this.eventList = Object.keys(events).map(key => ({
            uid: key,
            ...events[key],
        }))
    }
}

export default EventsStore
