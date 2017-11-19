import {observable, action, autorun} from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'

class EventsStore extends BaseStore {
    @observable list = [];

    constructor(...args) {
        super(...args)
    }

    getAll() {
        const ref = firebase.database().ref('events');
        ref.on('value', data => {
            console.log(data.val());
            this.setList(data.val());
        });
    }

    @action setList = list => this.list = list
}

export default EventsStore