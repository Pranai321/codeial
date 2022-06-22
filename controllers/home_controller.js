module.exports.home= function(req,res){
    console.log("home contoller page")
    return res.end("<h1>Home Controller is created</h1>");
}