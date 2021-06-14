/* eslint-disable prettier/prettier */

// Importando router
import { Router } from 'express';

// Importando al controlador
// eslint-disable-next-line import/no-unresolved
import homecontroller from '@server/controllers/homecontroller';

// Creando la instancia de un router
const router = new Router();

// GET
router.get('/', homecontroller.index);

// Creando un greting
router.get('/greeting',homecontroller.greeting);

// Exportando el router
export default router;
