import Jobs                 from './collection.jsx';
import techMaintenance      from '/imports/api/jobs/technicien_de_maintenance_informatique.json';
import _techMaintenance     from '/imports/api/jobs/_technicien_de_maintenance_informatique.json';
import maker                from '/imports/api/jobs/maker.json';
import integrateur_web      from '/imports/api/jobs/integrateur_web.json';
import data_analyst         from '/imports/api/jobs/data_analyst.json';
import community_manager    from '/imports/api/jobs/community_manager.json';
import assistant_gestion    from '/imports/api/jobs/assistant_e_de_gestion.json';
import animation            from '/imports/api/jobs/animation.json';

const jobs = _.union(techMaintenance, _techMaintenance, maker, integrateur_web, data_analyst, community_manager, assistant_gestion, animation);
Jobs.remove({});
console.log("Inserting jobs");
_.each(jobs, job => {
  Jobs.insert(job);
});
console.log("End insert jobs");
