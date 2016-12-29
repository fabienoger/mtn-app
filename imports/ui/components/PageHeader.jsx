import React       from 'react';
import ScrollArrow from '/imports/ui/components/ScrollArrow';

export default class PageHeader extends React.Component {
  render() {
    const widthDivided = ($(window).width() - 30) / 2;
    const arrowStyle = {
      position: "absolute",
      bottom: "0",
      left: widthDivided
    };
    return (
      <div id="page-header">
        <div className="backgroundImg" style={{height: '30%'}}>
          <img className="background" src="/images/home_background.png" />
          <div className="logo-wrapper">
            <img src="/images/logo-MTN.svg" />
          </div>
        </div>
        <div style={{height: '70%'}} className="presentation-wrapper">
          <div className="presentation">
            <h1 className="text-center">Présentation</h1>
            <div className="divider" style={{width: "25%", margin: "auto"}}></div>
            <div style={{width: "80%", padding: "25px 50px"}} className="centered text">
              <p className="text-center">A chaque métier sa formation ! Avec la Grande École du Numérique, de nombreuses formations accessibles à tou.te.s se sont ouvertes en France, que vous ayez des diplômes ou pas.</p>
              <p className="text-center">Il existe quelques sites les répertoriant, mais peu permettent de se repérer en un coup d’oeil.</p>
              <p className="text-center">C’est l’objectif principal de notre plateforme : vous renseigner, rendre très visuel la localisation des formations Grande École du Numérique (GEN) et vous montrer les opportunités de travail qu’elles peuvent vous apporter.</p>
            </div>
          </div>
          <ScrollArrow style={arrowStyle} top={false} />
        </div>
      </div>
    )
  }
}
