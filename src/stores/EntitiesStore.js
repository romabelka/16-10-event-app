import {observable, computed, action} from 'mobx'
import BasicStore from './BaseStore'
import firebase from 'firebase'
import {entitiesFromFB} from './utils'

class EntitiesStore extends BasicStore {
    @observable loading = false
    @observable loaded = false

    @observable entities = {}

    @computed get list() {
        return Object.values(this.entities)
    }

    @computed get size() {
        return Object.keys(this.entities).length
    }
}

export function loadAllHelper(refName) {
    return function () {
        this.loading = true

        firebase.database().ref(refName)
            .once('value', data => {
                this.entities = entitiesFromFB(data.val())
                this.loading = false
                this.loaded = true
            })
    }
}

export function subscribeHelper(refName) {
    return function () {
        this.loading = true

        const callback = data => {
            this.entities = entitiesFromFB(data.val())
            this.loading = false
            this.loaded = true
        }

        firebase.database().ref(refName).on('value', callback)

        return () => firebase.database().ref(refName).off('value', callback)
    }
}

export default EntitiesStore