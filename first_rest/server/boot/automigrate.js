'use strict'

module.exports=function(app){
    app.dataSources.mysql.automigrate('company',err=>{
        if(err) throw err;
        console.log("moved table");
    })

}