var bodyParser = require('body-parser');
var Player = require('../model/playerModel');
var util = require('util');
var fs = require('fs');
const csv=require('csvtojson');


const formidable = require('formidable').IncomingForm;

module.exports = function upload(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/fileupload',function(req,res){

        var form = new formidable.IncomingForm();
        var counter= 0;

        form.parse(req, function(err, fields, files) {

            // fs.readFile(files.upload.path, function(err,data) {
            //     console.log('data: '+data);

                
            // })

            csv()
                .fromFile(files.upload.path)
                .then((jsonObj)=>{

                    counter == jsonObj.length;
                    for (i = 0; i < jsonObj.length; i++) { 
                        var player = new Player(jsonObj[i]);
                        console.log(jsonObj);

                        player.save(function (err, bet, numAffected) {
                            if (err) {
                                console.log(err);
                                
                
                            } else if (player) {
                                console.log('successfully persisted ' + numAffected + ' player = ' + player);
                                
                            }
                        });

                    }
                    
                    
                    /**
                     * [
                     * 	{a:"1", b:"2", c:"3"},
                     * 	{a:"4", b:"5". c:"6"}
                     * ]
                     */ 
            });




            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('Processed: ' + counter + ' records.');
            res.write('received upload: '+ files.upload.path + '...');



            res.end(util.inspect({fields: fields, files: files}));
        });
        
    });

}


