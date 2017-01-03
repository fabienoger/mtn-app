import React       from 'react';
import ScrollArrow from '/imports/ui/components/ScrollArrow';
import Scroll      from 'react-scroll';

export default class PageHeader extends React.Component {
  showMap() {
    Scroll.animateScroll.scrollMore($(window).height());
  }
  showResources() {
    Scroll.animateScroll.scrollMore(($(window).height() * 2));
  }
  render() {
    const widthDivided = ($(window).width() - 30) / 2;
    const arrowStyle = {
      position: "absolute",
      bottom: "0",
      left: widthDivided
    };
    const linkStyle = {
      color: "#F0E999",
      cursor: "pointer"
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
              <p className="text-center">La première partie du site est composée de <span style={linkStyle} onClick={this.showMap.bind(this)}>la carte interactive</span> qui affiche les formations. Vous pouvez trier les résultats selon votre âge, les langages, les métiers, etc</p>
              <p className="text-center">Vous ne savez pas trop vers quel métier vous tourner ? c’est quoi un langage web ? Pas de panique ! Consultez la deuxième partie du site, composés de <span style={linkStyle} onClick={this.showResources.bind(this)}>diverses ressources</span> là pour vous aider ! Des vidéos, des articles, des MOOCS (formations en ligne), etc … tout pour vous renseigner au mieux :)</p>
            </div>
          </div>
          <ScrollArrow style={arrowStyle} top={false} />
        </div>
      </div>
    )
  }
}
