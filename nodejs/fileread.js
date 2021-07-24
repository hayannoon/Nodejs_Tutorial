const fs = require('fs');

/*
fs.unlink('/tmp/hello', (err) => {
    if (err) throw err;
    console.log('successfully deleted /tmp/hello');
});
*/

fs.readFile('./nodejs/sample.txt', 'utf8' , function(err,data){
   console.log(data);
});