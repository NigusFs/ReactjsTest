module.exports = function(req,res){
  res.sendFile(path.join(__dirname + 'index.html'));
}
