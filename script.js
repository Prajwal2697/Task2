// 1.create a request variable from XMLHTTPREQUEST
var request = new XMLHttpRequest();

// 2. create a connection 
request.open('GET','https://restcountries.eu/rest/v2/all',true)
// 3. send the request
request.send();
// 4. load the data
request.onload = function(){
    var countrydata = JSON.parse(this.response);
    console.log(countrydata);
    var sum = 0 ; for(i in countrydata){
        sum += countrydata[i].population;
       } console.log(sum)
}