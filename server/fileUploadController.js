var bodyParser = require('body-parser');
var util = require('util');
var fs = require('fs');

const formidable = require('formidable').IncomingForm;

module.exports = function upload(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/fileupload',function(req,res){

        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {

            fs.readFile(files.upload.path, function(err,data) {
                console.log('data: '+data);

                
            })


            res.writeHead(200, {'content-type': 'text/plain'});
            
            res.write('received upload:\n\n');



            res.end(util.inspect({fields: fields, files: files}));
        });
        
    });

}


