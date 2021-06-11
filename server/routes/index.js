// importaos el router de home
import homeRouter from './home';
// importando router de user
import userRouter from './user';

// Agregando la ruta a la apliccion
const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/user', userRouter);
};

export default {
  addRoutes,
};
