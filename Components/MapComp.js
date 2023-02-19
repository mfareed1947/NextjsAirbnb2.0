import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';
const MapComp = ({ SearchData }) => {
    const [viewLocation, setViewLocation] = useState({})
    const coordinates = SearchData.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates)
    return (
        <Map
            initialViewState={{
                width: '100%',
                height: "100%",
                latitude: center.latitude,
                longitude: center.longitude,
                zoom: 11
            }}
            mapStyle='mapbox://styles/mfareed/clea6pf8c002g01mvydncvk4k'
            mapboxAccessToken={process.env.API_KEY}
            style={{ width: "100%", height: '100%' }}

        >
            {SearchData.map((result) => (
                <div key={result.img}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        ofsetLeft={-20}
                        ofsetTop={-10}
                    >
                        <p
                            role='img'
                            aria-label='push-pin'
                            onClick={() => setViewLocation(result)}
                            className='cursor-pointer text-2xl animate-bounce'
                        >
                            📌
                        </p>
                    </Marker>
                    {viewLocation.long === result.long ? (
                        <Popup
                            onClose={() => setViewLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : false}
                </div>
            ))
            }
        </Map >
    )
}

export default MapComp
