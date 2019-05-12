const express = require('express');

const app = express();
const unirest = require("unirest");


app.set('port',(process.env.PORT || 3000));
app.use(express.static('public'));


app.get("/audio", function (req, res) {
  //Parameters sent in GET request stored in variables  
  
  var audioCode;
  
    var postData = {
    "input": {
        "text": "Former army officer Harry, joins forces with single mother Ingrid after they discover a severed hand in a German field. Soon, both are on a dangerous path that could reveal corruption and greed at the highest levels of government"
      },
      "voice": {
        "languageCode": "en-AU",
        "name": "en-AU-Wavenet-B",
        "ssmlGender": "MALE"
      },
      "audioConfig": {
        "audioEncoding": "MP3",
      }
}

  //***********  TESTING RText to Voice   ******************
   var Request = unirest.post("https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyCIX-pS94Ss4jQQuARh13j2bAHPKH3IP8g");
  
  Request.headers({'Accept': 'application/json', 'Content-Type': 'application/json'}).send(postData).then((response) => {
    res.send(response.body) 
    console.log(response.body)
  })

  
});

// listen for requests :)
app.listen(app.get('port'), function() {
  console.log('Your app is listening on port', app.get('port'));
});
