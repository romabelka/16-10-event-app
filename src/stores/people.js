import EntitiesStore, {loadAllHelper}  from './EntitiesStore'
import {computed, action, observable} from 'mobx'
import groupBy from 'lodash/groupBy'
import firebase from 'firebase'

class PeopleStore extends EntitiesStore {
    @observable selectedPersonKey = null
    @observable snapshot = null

    @computed get sections() {
        const grouped = groupBy(this.list, person => person.firstName.charAt(0))

        return Object.entries(grouped).map(([letter, list]) => ({
            title: `${letter}, ${list.length} people`,
            data: list.map(person => ({key: person.uid, person}))
        }))
    }

    @computed get selectedPerson() {
        return this.entities[this.selectedPersonKey];
    }

    @action selectPerson = person => {
        this.selectedPersonKey = person.uid
    }

    @action setSnapshot = snapshot => {
        this.snapshot = snapshot

        const storageRef = firebase.storage().ref();
        const snapshotRef = storageRef.child(`images/person-${key}-snapshot.jpg`);

        snapshotRef.putString(snapshot.base64, 'base64')
            .then(result => {
                console.log('--- uploaded')
            })
    }

    @action loadAll = loadAllHelper('people')
}

export default PeopleStore