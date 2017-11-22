import EntitiesStore, {loadAllHelper}  from './EntitiesStore'
import {computed, action, observable} from 'mobx'
import groupBy from 'lodash/groupBy'

class PeopleStore extends EntitiesStore {
    @observable selectedPersonKey = null

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

    @action loadAll = loadAllHelper('people')
}

export default PeopleStore