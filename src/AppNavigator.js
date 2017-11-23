import {StackNavigator, TabNavigator} from 'react-navigation'
import Auth from './screens/Auth'
import EventList from './screens/events/EventList'
import EventMap from './screens/events/EventMap'
import Event from './screens/events/Event'
import PeopleList from './screens/people/PeopleList'
import Person from './screens/people/Person'
import Camera from './common/Camera'

const ListsNavigator = TabNavigator({
    events: {
        screen: EventList
    },
    people: {
        screen: PeopleList
    },
}, {
    initialRouteName: 'people'
})

const AppNavigator = StackNavigator({
    lists: {
        screen: ListsNavigator
    },
    auth: {
        screen: Auth
    },
    event: {
        screen: Event
    },
    eventMap: {
        screen: EventMap
    },
    person: {
        screen: Person
    },
    camera: {
        screen: Camera
    }
})

export default AppNavigator