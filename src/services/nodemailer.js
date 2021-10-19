const nodemailer = require("nodemailer");
require("dotenv").config();

var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  //  port:465,
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USER,
    pass: process.env.PASS,
    clientId:
     process.env.IDCLIENT,
    clientSecret: process.env.CLIENTSECRET,
    refreshToken:
    process.env.TOKEN,
  },
});

module.exports.sendmail = (data) => {
  return new Promise((resolve, reject) => {
    var mailOptions = {
      from: "test.ibbous@gmail.com",
      to: `${data.email}`,
      subject: "Sujet test",
      html: `<p> Nous avons bien recu votre demande. Veuillez trouver le récapitulatif ci-dessous :
            <br/>
            Nom : ${data.lastname}
            <br/>
            Prénom : ${data.firstname}
            <br/>
            Adresse : ${data.adress}
            <br/>
            Téléphone : ${data.phone}
            <br/>
            Email : ${data.email}
            <br/>
            Type de bien : ${data.type}
            <br/>
            Années de construction : ${data.years}
            <br/>
            Offre : ${data.offre} €
            <p/>`,
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve("Success");
      }
      smtpTransport.close();
    });
  });
};

module.exports.sendmail2 = (data) => {
  return new Promise((resolve, reject) => {
    var mailOptions2 = {
      from: process.env.FROM,
      to: `${data.email}`,
      subject: "Sujet test",
      html: `<p>Bonjour ${data.lastname} ${data.firstname}, <br/> on nous a solicité afin vous adresser une offre dans le cadre de votre projet.
            <br/>
            Pour votre projet immobilier pour le bien situé à cette adresse : ${data.adress}
            <br/>
            Il vous faudra réaliser : DPE
            <br/>
            Notre offre pour cette prestation : 500 € TTC
            <br/>
            Nous restons à votre disposition pour des informations complémentaires.
            <br/>
            Cordialement.
            <br/>
            Dimo Diagnostic
            <p/>`,
    };

    smtpTransport.sendMail(mailOptions2, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve("Success");
      }
      smtpTransport.close();
    });
  });
};
