/* eslint-disable prettier/prettier */
import ExpHbs from 'express-handlebars';
import path from 'path';
// exportando una funcion de configuracion
export default (app) => {
  // registar el motor de plantillas
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'main',
    })
  );
  // seleccionar el motor de plantillas recien registrado
  app.set('view engine', 'hbs');
  // establecer la ruta de las vistas
  app.set('view', path.join(__dirname, '..', 'views'));
  return app;
};

