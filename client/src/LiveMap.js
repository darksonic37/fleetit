import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const KAFKA_TOPIC_UPDATES = 'updates'
const KAFKA_WEBSOCKET_PROXY = 'ws://localhost:9999'

const CustomMarker = (props) => (
  <Marker
    onClick={(e) => {console.log('hey', e, props.id); window.location.href = '/detail/' + props.id; }}
    {...props}
  />
)

const BikeMap = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 42.51126629307819, lng: -73.21476487152603 }}
    >
        {Array.from(props.bikes.values()).map((bike, index) => (
            <CustomMarker id={bike.bike_id} key={index} position={{ lat: bike.lat, lng: bike.lng }} />
        ))}
    </GoogleMap>
)

class LiveMap extends React.Component {
    state = {
        bikes: new Map()
    }

    componentDidMount() {
        (new WebSocket(`${KAFKA_WEBSOCKET_PROXY}/?topic=${KAFKA_TOPIC_UPDATES}`)).onmessage = (e) => {
            // Parse new message
            var payload = JSON.parse(JSON.parse(e.data)[0].message)

            // Mutate copy of bikes map
            var bikes = new Map(this.state.bikes)
            bikes.set(payload.bike_id, payload)

            // Update state
            this.setState({ bikes: bikes })
        }
    }

    render() {
        return (
            <BikeMap bikes={this.state.bikes} />
        )
    }
}

export default LiveMap
