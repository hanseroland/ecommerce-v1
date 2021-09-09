import jwt from 'jsonwebtoken';
import config from './config';


const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      nom: user.nom,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: '48h',
    }
  );
};

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: 'Jeton invalide' });
      }
      req.user = decode;
      next();
      return;
    });
  } else {
    return res.status(401).send({ message: "Jeton n'est pas reconnu." });
  }
};

const isAdmin = (req, res, next) => {
  console.log(req.user);
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ message: 'Jeton Admin invalide.' });
};

export { getToken, isAuth, isAdmin };