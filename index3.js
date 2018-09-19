var path=require('path');
var cheerio=require('cheerio');
var request=require('request');
var express=require('express');
var fs=require('fs');
var app=express();

var destination=fs.createWriteStream('./downloads/page1.html');

app.listen(8080);
console.log('listening to port 8080');
app.get('/',function(req,res){
    var count=0;
var getData=function (number){


return new Promise(function(resolve,reject){
var url="http://www.santabanta.com/jokes/?page="+number;

request(url,function(err,resp,body)
{

var $=cheerio.load(body);
  console.log("started page "+number);
  count++;
  console.log("count "+count);
var array=$('.sms_list_box_1');
 var newArray=array.map(function(index,element){

   var title=$(this).find('.sms_title a').html().trim();
   var body=$(this).find('.sms_text td').html().trim();


   var obj={jokeTitle:title,jokeBody:body};

   return obj;

 });
 var finalArray=[];
for (var i = 0; i < newArray.length; i++) {
finalArray[i] =newArray[i];
}

resolve(finalArray);

});
});
}

var promiseArray=[];
  for (var i = 26; i < 52; i++) {
  promiseArray[i]= getData(i+1);
  }
  console.log(promiseArray.length);
Promise.all(promiseArray).then(function(data){
  console.log(data);
  console.log("all doneeeeee!");
res.json(data);

}).catch((err)=>{

  res.json({err:"something went wrong"});
});

});
