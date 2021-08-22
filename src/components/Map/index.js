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
    const key = props.itemKey + "Key";
    const key2 = props.itemKey + "Key2";
    return (
      <>
        {props.coordinates.map((coordinate) => (
          <GoogleMap
            key={key}
            defaultZoom={5}
            defaultCenter={{
              lat: latitude,
              lng: longtitude,
            }}
          >
            <Marker
              key={key2}
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
