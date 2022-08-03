var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result)
// var asiaregion=result.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
// console.log(asiaregion);
// var population=result.filter((ele)=>ele.population<100000).map((ele)=>ele.name);
// console.log(population);

result.forEach(element => {
    console.log(element.name);
    console.log(element.region);
    console.log(element.subregion);
    console.log(element.population);
    console.log(element.capital);
    console.log(element.flag);




});


}