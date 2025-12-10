//mekanla ilgili bilgileri tutcağımız dosya
//modellemedki şemaya denk gelir
var mongoose=require('mongoose');
var hour=new mongoose.Schema({//alt şema
    day:{type:String,required:true},
    open:{type:String,required:true},
    close:{type:String,required:true},
    isCClosed:{type:Boolean,default:false}
});
var comment=new mongoose.Schema({//alt şema
    author:{type:String,required:true},
    rating:{type:Number,required:true,min:0,max:5}, 
    text:{type:String,required:true},
    date:{type:Date,default:Date.now}
});
var venue=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    rating:{type:Number,default:0,min:0,max:5},
    foodanddrink:[String],//string dizisi
    coordinates:{
        type:[Number],
        index:"2dsphere"//number dizisi
 
    },
    hours:[hour],//alt şema kullanımı
    comments:[comment]//alt şema kullanımı
});
mongoose.model('venue',venue,"venues");//ilki döküman tanımı


//hangisi en büyükse onun en altta olması lazım burda venue en büyük olduğu için en altta