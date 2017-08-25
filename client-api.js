var Client = require('node-rest-client').Client;

var client = new Client();

var token = '381db3dcf681d389f6a93165f09196c9869bb1e1';

//client.registerMethod("findCity", "https://api.waqi.info/search/?token=" + token + "&keyword=" + city , "GET");


module.exports = {
  getAqi: function (city) {
      var args = {
          //headers: { "Content-Type": "application/json" },
          parameters: {
              keyword: city,
              token: token
          }

      };

      client.get("https://api.waqi.info/search/", args, function (data, response) {
          // parsed response body as js object
          console.log(data);
          // raw response
          //console.log(response);
      });
  }
};
