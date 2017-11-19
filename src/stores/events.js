import {observable, action, autorun} from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'
import {fbToEntities} from "../utils";

class EventsStore extends BaseStore {
    @observable list = [];

    constructor(...args) {
        super(...args)
    }

    getAll() {
        const ref = firebase.database().ref('events');
        ref.on('value', data => {
            this.setList( fbToEntities(data.val()) );
        });
    }

    @action setList = list => this.list = list
}

export default EventsStore