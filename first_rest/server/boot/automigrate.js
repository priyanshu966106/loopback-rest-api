'use strict'

module.exports=function(app){
    app.dataSources.mysql.automigrate(['company','account','product','category'],err=>{
        if(err) throw err;
        console.log("moved table");
    })

}