import {StackNavigator, TabNavigator} from 'react-navigation'
import AuthScreen from './screens/Auth'
import EventListScreen from './screens/EventList'

const AppNavigator = new StackNavigator({
    auth: {
        screen: AuthScreen
    },
    data: {
        screen: TabNavigator({
            events: {
                screen: EventListScreen,
                navigationOptions: ({ navigation }) => ({
                    title: 'Events',
                })
            },
            people: {
                screen: EventListScreen,
                navigationOptions: ({ navigation }) => ({
                    title: 'People',
                })
            },
        }, {
            tabBarPosition: 'top',
            animationEnabled: true,
            tabBarOptions: {
                activeTintColor: '#e91e63',
                labelStyle: {
                    fontSize: 16,
                },
            },
        }),
        navigationOptions: ({ navigation }) => ({
            title: 'Data',
        })
    }
})

export default AppNavigator