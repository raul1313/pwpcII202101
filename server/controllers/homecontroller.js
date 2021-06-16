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
  res.render('home/about', {title: 'Acerca de ProjNodes'});
  };
export default {
  index,
  greeting,
  about,
};
