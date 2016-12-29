import React    from 'react';
import Resource from '/imports/ui/components/resources/Resource';

export default class Careers extends React.Component {
  render() {
    return (
      <div className="careers container">
        <h1 className="text-center">Métiers Du Numérique</h1>
        <div className="columns">
          <Resource title="Développeur Web" url="https://www.youtube.com/embed/6ALDzbxuk3g" />
          <Resource title="Intégrateur Web" url="https://www.youtube.com/embed/PVJ7zC1z7fU" />
          <Resource title="Web Designer" url="https://www.youtube.com/embed/tSSduv5dEPg" />
        </div>
        <div className="columns">
          <Resource title="Maker" url="https://www.youtube.com/embed/tSSduv5dEPg" />
          <Resource title="Médiateur Numérique" url="https://www.youtube.com/embed/nmAX8mClOo8" />
          <Resource title="Architecte en Technologie Numérique" url="https://www.youtube.com/embed/RdldfkpEqr8" />
        </div>
      </div>
    )
  }
}
