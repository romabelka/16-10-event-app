import {StackNavigator, TabNavigator} from 'react-navigation'
import AuthScreen from './screens/Auth'
import EventListScreen from './screens/EventList'
import PeopleListScreen from "./screens/PeopleList";

const AppNavigator = new StackNavigator({
    auth: {
        screen: AuthScreen
    },
    content: {
        screen: TabNavigator({
            eventList: {
                screen: EventListScreen
            },
            peopleList: {
                screen: PeopleListScreen
            }
        })
    }
})

export default AppNavigator