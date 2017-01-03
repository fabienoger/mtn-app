import React, {PropTypes} from 'react';
import { render }         from 'react-dom';
import L                  from 'leaflet';
import MarkerClusterGroup from 'leaflet.markercluster';
import Jobs               from '/imports/api/jobs/collection';
import FormationModal     from '/imports/ui/components/FormationModal';
import SearchWrapper      from '/imports/ui/components/SearchWrapper';
import SearchResult       from '/imports/ui/components/SearchResult';
import JobModal           from '/imports/ui/components/JobModal';
import Loading            from '/imports/ui/components/Loading';
import ScrollArrow        from '/imports/ui/components/ScrollArrow';

import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'


export default class LeafletMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formations: this.props.formations,
      formation: null,
      job: null,
      jobs: []
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
    this.addFormations(this.state.formations);
    //this.addJobsMarkers(this.state.jobs);
  }

  // Return Array of JSON jobs from formation.metier
  getJsonFromFormation(formation) {
    if (!formation) {
      return false;
    }
    let jobsStr = formation.metier.split(",");
    let jobs = [];
    Meteor.call("getJobs", "developpeur", "Paris", formation.languages, (err, result) => {
      if (err) {
        console.error("getJobs", err);
      }
      // Join multiple jobs data
      let jobs = result.data.data;
      // Add jobs to Map
      this.addJobsMarkers(jobs);
      this.map.fitBounds(this.markerCluster.getBounds());
      this.setState({jobs}, () => {
        this.closeModal();
        return jobs;
      });
    });
  }

  // Get jobs and add formations and Jobs markers close modal and fitbounds
  displayFormationJobs(e) {
    const formation = this.state.formation;
    this.getJsonFromFormation(formation);
    this.addFormations([this.state.formation]);
  }

  // Clear markers and add default formations
  clearAndAddFormations() {
    this.setState({
      formations: this.props.formations,
      jobs: []
    });
    this.addFormations(this.props.formations);
    this.map.fitBounds(this.markerCluster.getBounds());
  }

  // Clear markers and add new formations
  addFormations(formations) {
    this.markerCluster.clearLayers();
    _.each(formations, (f) => {
      let marker = L.marker(f.localisation);
      marker._id = f._id;
      marker.on("click", (e) => {
        this.setState({formation: f});
      });
      this.markerCluster.addLayer(marker);
    });
  }

  // Add jobs marker
  addJobsMarkers(jobs) {
    _.each(jobs, (job) => {
      let coordinates = [48.866667, 2.333333];
      if (job.coordonnees && job.coordonnees.lat && job.coordonnees.lon) {
        coordinates = job.coordonnees;
      }
      let marker = L.marker(coordinates);
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

  searchResult(formations) {
    this.addFormations(formations);
    this.setState({formations});
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
    const widthDivided = ($(window).width() - 30) / 2;
    const arrowStyle = {
      position: "absolute",
      bottom: "0",
      left: widthDivided,
      color: "#181a34"
    };

    return(
      <div id="map-container" style={mapContainerStyle}>
        <SearchWrapper searchResult={this.searchResult.bind(this)} />
        {this.state.formations ?
          <SearchResult formations={this.state.formations} jobs={this.state.jobs}
            clearAndAddFormations={this.clearAndAddFormations.bind(this)}
          />
        : ''}
        <div id="LeafletMap" style={mapStyle}></div>
        {this.state.formation ?
          <FormationModal formation={this.state.formation}
            onKeyPress={this.closeModal.bind(this)} closeModal={this.closeModal.bind(this)}
            displayFormationJobs={this.displayFormationJobs.bind(this)}
          />
        : ''}
        {this.state.job ?
          <JobModal job={this.state.job} onKeyPress={this.closeModal.bind(this)}
            closeModal={this.closeModal.bind(this)}
          />
        : ''}
        <ScrollArrow style={arrowStyle} top={false} />
      </div>
    )
  }
}

LeafletMap.propTypes = {
  formations: PropTypes.array.isRequired
};
