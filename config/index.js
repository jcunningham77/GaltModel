var configValues = require('./config');

module.exports = {
    getDBConnectionString:function(){
        return 'mongodb://'+ configValues.uname+':'+configValues.password+'@ds229771.mlab.com:29771/galtmodel';
    
    }


    
};