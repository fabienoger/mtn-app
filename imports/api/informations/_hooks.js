import Informations from './collection'

Informations.before.insert((userId, doc) => {
  doc.active = true;
});
