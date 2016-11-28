import React, {PropTypes} from 'react';
import { render }         from 'react-dom';
import L                  from 'leaflet';
import MarkerClusterGroup from 'leaflet.markercluster';
import FormationModal     from '/imports/ui/components/FormationModal';
import JobModal           from '/imports/ui/components/JobModal';
import Loading            from '/imports/ui/components/Loading';
import Menu               from '/imports/ui/components/Menu';
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'


export default class LeafletMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formation: null,
      job: null
    }
  }
  componentDidMount() {
    /* Image configuration */
   L.Icon.Default.imagePath = '/images/';

    /* Map initialization */
    this.map = L.map('LeafletMap', {
      zoomControl: false,
      scrollWheelZoom: false
    });
    L.control.zoom({
      position:'topright'
    }).addTo(this.map);
    this.map.setView([48.866667, 2.333333], 11)
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
    this.controlLayer = new L.Control.Layers(baseMaps, {}, {
      position: 'topright'
    })
    this.map.addControl(this.controlLayer);
    /* Add default map */
    baseMaps['OSM'].addTo(this.map);
    this.markerCluster = new L.MarkerClusterGroup({
       showCoverageOnHover: true,
       animate: true,
       chunkedLoading: true
    });
    this.map.addLayer(this.markerCluster);
    this.addFormations();
//    this.addJobsMarkers();
  }

  addFormations() {
    _.each(this.props.formations, (f) => {
      let marker = L.marker(f.localisation);
      marker._id = f._id;
      marker.on("click", (e) => {
        this.setState({formation: f});
      });
      this.markerCluster.addLayer(marker);
    });
  }

  addJobsMarkers(jobs) {
    _.each(this.props.jobs, (job) => {
      let marker = L.marker([48.866667, 2.333333]);
      marker.on("click", (e) => {
        this.setState({job: job});
      });
      this.markerCluster.addLayer(marker);
    });
  }

  closeModal() {
    this.setState({
      formation: null,
      job: null
    });
  }

  render() {
    const mapContainerStyle = {
      position: "relative",
      height: "100%"
    };
    const mapStyle = {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "100%",
      width: "100%"
    };

    return(
      <div id="map-container" style={mapContainerStyle}>
        <Menu />
        <div id="LeafletMap" style={mapStyle}></div>
        {this.state.formation ?
          <FormationModal formation={this.state.formation} onKeyPress={this.closeModal.bind(this)} closeModal={this.closeModal.bind(this)} />
        : ''}
        {this.state.job ?
          <JobModal job={this.state.job} onKeyPress={this.closeModal.bind(this)} closeModal={this.closeModal.bind(this)} />
        : ''}
      </div>
    )
  }
}

LeafletMap.propTypes = {
  formations: PropTypes.array.isRequired,
  jobs: PropTypes.array.isRequired
};
