const Diagnostic = require("../models/diagnostic");

let sendMail = require("../src/services/nodemailer").sendmail;
let sendMail2 = require("../src/services/nodemailer").sendmail2;
let sendMailDimo=require("../src/services/mailgun").sendmail3

const DiagnosticController = {
  createDiagnostic: async (req, res) => {
    try {
      const newDiagnostic = new Diagnostic({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        adress: req.body.adress,
        phone: req.body.phone,
        email: req.body.email,
        type: req.body.email,
        years: req.body.years,
        offre: req.body.offre,
      });
      newDiagnostic.save().then((data) => {
        sendMail({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          adress: req.body.adress,
          phone: req.body.phone,
          type: req.body.type,
          years: req.body.years,
          offre: req.body.offre,
        });

        sendMail2({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          adress: req.body.adress,
        });

        sendMailDimo({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          adress: req.body.adress,
          phone: req.body.phone,
          type: req.body.type,
          years: req.body.years,
          offre: req.body.offre,

        })
        res.send(data);
      });
    } catch (error) {
      res.status(500).send("erreur");
      
    }
  },
};

module.exports = DiagnosticController;
