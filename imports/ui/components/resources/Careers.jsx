import React    from 'react';
import Resource from '/imports/ui/components/resources/Resource';

export default class Careers extends React.Component {
  render() {
    return (
      <div className="careers container">
        <div className="header">
          <h1 className="text-center">Métiers Du Numérique</h1>
        </div>
        <div className="video">
          <div className="columns">
            <Resource title="Développeur Web" video={true} url="https://www.youtube.com/embed/6ALDzbxuk3g" />
            <Resource title="Intégrateur Web" video={true} url="https://www.youtube.com/embed/PVJ7zC1z7fU" />
            <Resource title="Web Designer" video={true} url="https://www.youtube.com/embed/tSSduv5dEPg" />
          </div>
          <div className="columns">
            <Resource title="Maker" video={true}url="https://www.youtube.com/embed/Dw7AioKDfA4" />
            <Resource title="Médiateur Numérique" video={true}url="https://www.youtube.com/embed/nmAX8mClOo8" />
            <Resource title="Architecte en Technologie Numérique" video={true}url="https://www.youtube.com/embed/RdldfkpEqr8" />
          </div>
        </div>
      </div>
    )
  }
}
