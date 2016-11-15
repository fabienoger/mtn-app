import Formations from './collection'

Formations.before.insert((userId, doc) => {
  doc.active = true;
});
