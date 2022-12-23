const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2];
if(location.length<3)
{
    return console.log("INVALID LOCATION")
}
else{
geocode(location, (error,data)=>
 {
    if(error){
    return console.log(error)
    }
    forecast(data.lat,data.long,(error,data)=>
    {
        if(error)
        {
            return console.log(error)
        }
        console.log(data)
    })
 })
}
