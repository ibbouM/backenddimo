require("dotenv").config();

var mailgun = require("mailgun-js")({
  apiKey: process.env.KEY,
  domain:process.env.DOMAIN,
});

module.exports.sendmail3 = (data) => {
  return new Promise((resolve, reject) => {
    var mail = {
      from: `${data.email}`,
      to: process.env.TO,
      subject: "Diagnostic Dimo",
      html: `<p>
      <h1>DIMO diagonstic<h1/>
      Nom : ${data.lastname}
      <br/>
      Prénom : ${data.firstname}
      <br/> 
      Adresse : ${data.adress}
      <br/>
      Téléphone :${data.phone}
      <br/>
      Email : ${data.email}
      <br/>
      Type de bien : ${data.type}
      <br/>
      Année de construction : ${data.years}
      <br/>
      Offre : ${data.offre}
      
      </p>`,
    };

    mailgun.messages().send(mail, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve("Success");
      }
    });
  });
};
