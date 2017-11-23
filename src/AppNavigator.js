import {StackNavigator, TabNavigator} from 'react-navigation'
import Auth from './screens/Auth'
import EventList from './screens/events/EventList'
import EventMap from './screens/events/EventMap'
import Event from './screens/events/Event'
import PeopleList from './screens/people/PeopleList'
import PersonPhoto from './screens/people/PersonPhoto'

const ListsNavigator = TabNavigator({
    events: {
        screen: EventList
    },
    people: {
        screen: PeopleList
    }
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
    personPhoto: {
        screen: PersonPhoto
    }
})

export default AppNavigator