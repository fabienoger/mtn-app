import React                from 'react';
import TrackerReact         from 'meteor/ultimatejs:tracker-react'
import Formations           from '/imports/api/formations/collection'
import Jobs                 from '/imports/api/jobs/collection'
import LeafletMap           from '/imports/ui/components/LeafletMap';
import Loading              from '/imports/ui/components/Loading';
import PageHeader           from '/imports/ui/components/PageHeader';
import Resources            from '/imports/ui/components/resources/Resources';
import jobsSample           from '/imports/api/jobs/jobs.json';


export default class Home extends TrackerReact(React.Component) {
  constructor(props) {
    super(props)
    this.state = {
      formations: Meteor.subscribe("formations"),
      jobs: Meteor.subscribe("jobs")
    }
  }

  componentWillUnmount() {
    this.state.formations.stop();
    this.state.jobs.stop();
  }

  render() {
    if (!this.state.formations.ready()) {
      return (<Loading />)
    }
    const formations = Formations.find({}).fetch();
    return (
      <div id="home-page" style={{height: '100%'}}>
        <PageHeader />
        <LeafletMap formations={formations} />
        <Resources />
      </div>
    )
  }
}
