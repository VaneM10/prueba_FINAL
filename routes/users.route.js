const  { Router } = require('express');

const { viewPlayers, futbolistasPost, futbolistasPut, futbolistasDelete } = require('../controllers/users.controller');

const routerPlayer = Router();

routerPlayer.get('', viewPlayers);
routerPlayer.post('', futbolistasPost);
routerPlayer.put('/:id', futbolistasPut);
routerPlayer.delete('/:id', futbolistasDelete);

module.exports = routerPlayer;