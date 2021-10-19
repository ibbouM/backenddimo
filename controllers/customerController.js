const Customer = require("../models/customers");
const argon2 = require("argon2");
const generateToken = require("../src/services/generateToken");

const CustomerController = {
  createCustomer: async (req, res) => {
    try {
      const newCustomer = new Customer({
        email: req.body.email,
        password: req.body.password,
      });
      const data = await newCustomer.save();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send("Erreur lors de l'ajout du client");
    }
  },
  Login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Customer.findOne({ email });

      if (!user) {
        return res
          .status(401)
          .send("Erreur de mot de passe et/ou de nom d'utilisateur");
      }
      const match = await argon2.verify(user.password, password);
      if (!match) {
        return res
          .status(401)
          .json("Erreur de mot de passe et/ou d'utilisateur");
      }
      generateToken.generateToken().then((response) => {
        const user_id = {
          id: user._id,
          user: true,
          token: response.data.access_token,
        };
        res.status(200).json(user_id);
      });
    } catch (error) {
      res.status(500).send("Erreur lors du login", error);
     
    }
  },
};

module.exports = CustomerController;
