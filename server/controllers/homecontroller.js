/* eslint-disable prettier/prettier */
const index = (req, res) => {
  res.render('index', {
    title: 'ProjNodes',
  });
};

const greeting = (req,res) => {
    res.status(200).json({
        message: 'Hola Campeon De la Web'
    });
};
export default {
  index,
  greeting,
};
