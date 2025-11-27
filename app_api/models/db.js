var mongoose=require('mongoose');
var dbURI='mongodb+srv://edanurtarhan:edanur5252@cluster0.vzigkek.mongodb.net/?appName=Cluster0';
mongoose.connect(dbURI);

mongoose.connection.on("connected",function(){//bağlandığında
    console.log("Mongoose "+dbURI+" bağlantısı başarılı");
});//bir fonksiyonun başka bir omksiyona geçirilmesi callback

mongoose.connection.on("error",function(){
    console.log("Mongoose "+dbURI+" bağlantısı başarısız");
});//hata verdiğinde

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose "+dbURI+" bağlantısı kesildi");
});//bağlantı hatası olduğunda

//sigint kesmedir
process.on('SIGINT',function(){
    mongoose.connection.close();
    console.log("Mongoose bağlantısı kapatıldı");
    process.exit(0);//çıkış kodu 0 ise başarılı demektir
    
});
require('./venue');