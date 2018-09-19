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

var getData=function (alpahbet){

return new Promise(function(resolve,reject){




  var url="http://www.dia-supply.applacarteindia.com/index.php/trader_listings/india/"+alpahbet;
console.log("Starting request with : "+alpahbet);
  request(url,function(err,resp,body)

  {
var users=this;
  var $=cheerio.load(body);
  console.log("Download Done :" +alpahbet);
  var allDetails = [];
  var phone = [];

  phone= $('.traders_info .seperate_info').find('.res_phone_number').map(function(){
  return $(this).text().trim();
  console.log($(this));
   });

   allDetails= $('.traders_info .seperate_info').find('.right_values').map(function(){
   return $(this).text().trim();
   console.log($(this));
    });

var jsonArray=[];

var count=0;

for (var i = 0; i < allDetails.length; i++) {
if (allDetails[i]) {


  if(allDetails[i].startsWith('www.')){
allDetails.splice(i,1)

  }}
}


for (var i = 0; i < allDetails.length; i++) {

var obj=
{
officenumber:allDetails[i],
company:allDetails[i+1],
contactPerson:allDetails[i+2],
qbc:allDetails[i+3],
phonenumber:phone[count]
};

jsonArray[count]=obj;

count++;
i+=3;

}
resolve(jsonArray);
// console.log(jsonArray);
//     allDetails.each(function(i,elem){
//       console.log(elem);
//     });
// res.json(jsonArray);
// phone.each(function(i,elem){
//   console.log(elem);
// });
 });
});
}

var alphabetsArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var promiseArray=[];

alphabetsArray.forEach((item,index)=>{

promiseArray[index]=getData(item);

});



Promise.all(promiseArray).then(function(data){
console.log("all done!");
res.json(data);

})

// var promise =getData('p');
// promise.then((data)=>{
//
//   res.json(data);
// });
//
//





 });
 // request
// console.log(companyName.length);
// var superCounter=0;
// var finalarray=[];
// finalarray=companyName.map((ind,element)=>{
//
// if (superCounter==0) {
// superCounter=1;
//
//   return element.children[2].children[0].data;
// }
// else if(superCounter==1){
// superCounter=2;
//
// return ".................";
// }
// else if (superCounter==2) {
//   superCounter=3;
//   return element.children[1].children[0].data;
// }
// else if (superCounter==3) {
//   superCounter=4;
//
//   if (element.children[1].children[0]) {
//     return element.children[1].children[0].data;
//   }else {
//     return "*************";
//   }
//
// }
// else if (superCounter==4) {
//   superCounter=5;
//
//   if (element.children[1].children[0]) {
//     return   element.children[1].children[0].data;
//   }else {
//     return "!!!!!!!!!!!!!!!!!";
//   }
//
// }else {
//   superCounter=0;
// return element.children[4].children[2].data.trim();
// }
//
//   // console.log(element.children().slice(1,2).text());
// // if (ind%5==0 && ind !=0)
// // {
// // return element.children[3].children[0].data;
// // }
// // else {
// //
// // return element.children[2].children[0].data;
// //
// // }
//
//
//
// });

//   finalarray.each((i,data)=>{
// console.log(data);
//
//   });
//   console.log(finalarray.length);
//   res.json({success:"done"});
// });
//
//
// });
// request(url).pipe(destination).on('finish',function(){
//
//     console.log('all done');
// }).on('error',function(){
//
//     console.log('Error');
// })
