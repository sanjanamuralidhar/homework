var fs = require('fs');

var data = "my friend list";

fs.writeFile('temp.txt', data, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});