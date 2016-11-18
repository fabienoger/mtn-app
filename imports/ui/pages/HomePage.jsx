import React              from 'react';
import TrackerReact       from 'meteor/ultimatejs:tracker-react'
import Formations         from '/imports/api/formations/collection'
import LeafletMap         from '/imports/ui/components/LeafletMap';
import Loading            from '/imports/ui/components/Loading';
import InformationsModal  from '/imports/ui/components/InformationsModal';
import jobsSample         from '/imports/api/jobs/jobs.json';

export default class Home extends TrackerReact(React.Component) {
  constructor(props) {
    super(props)
    this.state = {
      formations: Meteor.subscribe("formations"),
      informations: null
    }
  }
  closeModal() {
    this.setState({informations: null});
  }

  render() {
    if (!this.state.formations.ready()) {
      return (<Loading />)
    }
    const jobs = jobsSample.jobs;
    const formations = Formations.find({}).fetch();
    return (
      <div id="home-page">
        <LeafletMap formations={formations} jobs={jobs} />
        {this.state.informations ?
          <InformationsModal
            informations={this.state.informations}
            onKeyPress={this.closeModal.bind(this)}
            closeModal={this.closeModal.bind(this)}
          />
        : <Loading />}
      </div>
    )
  }
}
