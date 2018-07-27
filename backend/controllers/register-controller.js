var connection = require('./../migration');
module.exports.register=function(req,res){
    console.log("req",req.body);
    var today = new Date();
  
    var users={
        "name":req.body.name,
        "email":req.body.eamil,
        "password":req.body.password,
     
        
    }
      connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query',
            data:users
          
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}