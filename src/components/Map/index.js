import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
    let latitude = props.coordinates[0];
    let longtitude = props.coordinates[1];
    return (
      <>
        {props.coordinates.map((coordinate) => (
          <GoogleMap
            defaultZoom={5}
            defaultCenter={{
              lat: latitude,
              lng: longtitude,
            }}
          >
            <Marker
              key={coordinate[0]}
              position={{
                lat: latitude,
                lng: longtitude,
              }}
            />
          </GoogleMap>
        ))}
      </>
    );
  })
);

export default MyMapComponent;
