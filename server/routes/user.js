// importando Router

import { Router } from 'express';

// importando el controlador

import usercontroller from '@server/controllers/usercontroller';

// creando la instancia del router
const router = new Router();

/* GET users listing. */
router.get('/', usercontroller.index);

export default router;
