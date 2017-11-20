import React, { Component } from 'react'
import {View,Text, StyleSheet} from 'react-native'
import {MapView, Location, Permissions} from 'expo'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

@observer
class EventMap extends Component {
    static propTypes = {

    };

    @observable permissionAsked = false
    @observable permissionGranted = false
    @observable location = null

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.LOCATION)
        this.permissionAsked = true
        this.permissionGranted = status === 'granted'

        const { coords } = await Location.getCurrentPositionAsync()
        this.location = coords
    }


    render() {
        if (!this.permissionAsked) return null
        if (!this.permissionGranted) return <Text>Permission denied</Text>
        if (!this.location) return <Text>Unknown location</Text>

        return <MapView
            style = {styles.map}
            initialRegion = {{
                ...this.location,
                latitudeDelta: 0.01,
                longitudeDelta: 0.1
            }}
        >
            <MapView.Marker coordinate = {this.location} title = 'hello'/>
        </MapView>
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})

export default EventMap