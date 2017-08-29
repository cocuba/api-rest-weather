var Client = require('node-rest-client').Client;

var client = new Client();

var token = '381db3dcf681d389f6a93165f09196c9869bb1e1';


module.exports = function(app){
  getAqi = function (req, res) {
      var city = req.params.city;
      var args = {
          parameters: {
              keyword: city,
              token: token
          }
      };

      client.get("https://api.waqi.info/search/", args, function (data, response) {
          // parsed response body as js object
          console.log('GET /tvshow/' + keyword);
          res.status(200).send(data);
          // raw response
          //console.log(response);
      });
  };

    //API routes
    var apiaqi = express.Router();

    apiaqi.route('checkaqi/:city')
        .get(clientApi.getAqi());

    app.use('/api', apiaqi);
};


