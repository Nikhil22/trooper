import Agenda from 'agenda';
import { db } from '../config.js';

const runTasks = () => {
    let agenda = new Agenda({db: {address: db.mongo, collection: "agendajobs", options: {server: {auto_reconnect: true}}}});

    agenda.define('fire off follow up reminder', async (job, done) => {
        done();
    });

    agenda.on('ready', async () => {
        // clear all locked tasks
        await agenda._collection.update(
            { lockedAt: { $exists: true }},
            { $set: { lockedAt: null }},
            { multi: true}
        );

        agenda.every('*/15 9-21 * * *', 'fire off follow up reminder'); //every 15min between 09:00 - 21:00

        agenda.start();
    });
};
export default runTasks;
