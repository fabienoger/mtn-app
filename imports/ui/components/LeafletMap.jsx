import React      from 'react';
import { render } from 'react-dom';
import L          from 'leaflet';

export default class LeafletMap extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log("L => ", L);
    /* Image configuration */
    L.Icon.Default.imagePath = '/images/'

    /* Map initialization */
    var map = L.map('LeafletMap').setView([51.505, -0.09], 13);
    /* DEFAULT TILE LAYERS */
    var baseMaps = {
      "CartoDB": L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
          attribution: '<a href="http://altic.org/">&copy; Altic</a> - <a href="http://cartodb.com/attributions">CartoDB</a> - Maps <a href="http://www.osm.org">&copy; OpenStreetMap</a>',
          maxZoom: 19
      }),
      "CartoDB Dark": L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
          subdomains: 'abcd',
          maxZoom: 19
      }),
      "OSM": L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>',
          maxZoom: 19
      }),
      "Transport": L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors & <a href="http://thunderforest.com/">Thunderforest</a>',
          maxZoom: 19
      }),
      "OSMRoads": L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
          attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors & <a href="http://thunderforest.com/">Thunderforest</a>',
          maxZoom: 19
      })
    };

    /* add baseMaps to controlLayer */
    const controlLayer = new L.Control.Layers(baseMaps, {}, {
        position: 'bottomright'
    })
    map.addControl(controlLayer);
    /* Add default map */
    baseMaps['OSM'].addTo(map);
    this.setState({
      map: map,
      controlLayer: controlLayer
    });
  }
  render() {
    const mapStyle = {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "100%",
      width: "100%"
    };
    const position = [51.505, -0.09];

    return(
      <div id="LeafletMap" style={mapStyle}>
      </div>
    )
  }
}
