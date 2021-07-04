/* eslint-disable prettier/prettier */
const index = (req, res) => {
  res.render('home/index', {
    title: 'ProjNodes',
  });
};
const greeting = (req, res) => {
  res.status(200).json({
    message: 'Hola Campeon De la Web',
  });
};

const about = (req, res) => {
  res.render('home/about', {appVersion: '0.0.1'});
  };

  const CV = (req, res) => {
    res.render('home/CV', {Autor: 'Hernandez Mendoza Viviana Aime', Carrera: 'TICS'});
    
    };

    const Cursos = (req, res) => {
      res.render('home/Cursos', {Referencias: 'Fundacion Carlos Slim', Direccion: 'https://capacitateparaelempleo.org/'});
      };
  
export default {
  index,
  greeting,
  about,
  CV,
  Cursos,
};
