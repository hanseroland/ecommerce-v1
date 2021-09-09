import express from 'express'
import User from '../modeles/userModel'
import { getToken, isAuth } from '../utils';





const router = express.Router();


router.post('/signin', async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      nom: signinUser.nom,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    
    res.status(401).send({ message: 'Email invalide ou mot de passe invalide .' });
  }
});

router.post('/register', async (req, res) => {
  const user = new User({
    nom: req.body.nom,
    email: req.body.email,
    password: req.body.password,
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      nom: newUser.nom,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ message: "Informations d'utilisateur invalides." });
  }
});

router.get('/createadmin', async (req, res) => {
    try {
      const user = new User({
        nom: 'Admin',
        email: 'admin@gmail.com',
        password: '@Dmin1234',
        isAdmin: true,
      });
      const newUser = await user.save();
      res.send(newUser);
    } catch (error) {
      res.send({ message: error.message });
    }
  });

  export default router;