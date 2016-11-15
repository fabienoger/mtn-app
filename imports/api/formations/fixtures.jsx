import Formations from './collection.jsx'

/* Insert Formations if length is not equals to file */
import listFormationsGEN from './liste_formation_GEN_IDF.json'
if (Formations.find({}).count() != listFormationsGEN.length) {
  Formations.remove({});
  console.log("Insertion des formations GEN IDF dans la collection Formations [...]");
  _.each(listFormationsGEN, (f) => {
    Formations.insert(f);
  });
  console.log("Fin de l'insertion dans la collection Formations");
}
