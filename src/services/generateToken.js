var axios = require("axios").default;

async function generateToken() {
  var data = {
    client_id: "tzrUTfIRShDaUnnuX1QAs8mEbazjviUR",
    client_secret:
      "MK6Q18j55KTwVvWEz9NpzTAONHVEaVGe2jt8i5Ez8YDmbaROq8G69u6gMb0oFol1",
    audience: "http://localhost:8081/",
    grant_type: "client_credentials",
  };

  var options = {
    method: "POST",
    url: "https://dev-n3pszk4b.eu.auth0.com/oauth/token",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(data),
  };

  var a = axios
    .request(options)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
     
    });
  return a;
}

module.exports.generateToken = generateToken;
