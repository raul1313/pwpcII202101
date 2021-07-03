/* eslint-disable prettier/prettier */

// Importando router
import { Router } from 'express';

// Importando al controlador
// eslint-disable-next-line import/no-unresolved
import homecontroller from '@server/controllers/homecontroller';

// Creando la instancia de un router
const router = new Router();

// GET
router.get(['/', '/index'], homecontroller.index);

// Creando un greting
router.get('/greeting',homecontroller.greeting);
// GET about

router.get('/about',homecontroller.about);

// GET CV

router.get('/CV',homecontroller.CV);

// Exportando el router
export default router;
