import { Router } from 'express';
import NpsController from '../controllers/NpsController';

const routes = Router();

routes.get('/igti/nps/:id', NpsController.index);

routes.post('/igti/nps', NpsController.create);

routes.get('/igti/nps', NpsController.show);

export default routes;
