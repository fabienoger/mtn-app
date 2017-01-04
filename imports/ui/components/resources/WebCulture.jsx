import React    from 'react';
import Resource from '/imports/ui/components/resources/Resource';
import Download           from '/imports/ui/components/Download';

export default class Careers extends React.Component {
  render() {
    return (
      <div className="web-culture container">
        <div className="header">
          <h1 className="text-center">Culture Web</h1>
        </div>
        <div className="video">
        <div className="columns text-center">
          <Resource title="Comment ça marche internet ?"  video={false} img="/images/comment_internet.png" url="https://www.youtube.com/embed/6ALDzbxuk3g" />
          <Resource title="Qu’est-ce que la transformation numérique ?" video={false} img="/images/comprendreweb.jpg" url="https://www.youtube.com/embed/PVJ7zC1z7fU" />
          <Resource title="Comprendre le web - OpenClassrooms " video={false} img="/images/web.jpg" url="https://www.youtube.com/embed/tSSduv5dEPg" />
        </div>
        <div className="columns text-center">
          <Resource title="Maker/Fab Manager " video={false} img="/images/m__tiernum.png" url="https://www.youtube.com//embed/Dw7AioKDfA4" />
          <Resource title="Un mooc, c’est quoi ?" video={false} img="/images/transfonum.png" url="https://www.youtube.com/embed/nmAX8mClOo8" />
          <Download />
        </div>
        </div>
      </div>
    )
  }
}
