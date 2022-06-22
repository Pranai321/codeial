module.exports.home= function(req,res){
    
    return res.render('home',{
        title:"home",
        heading:"Welcome to codeial"
    })
}