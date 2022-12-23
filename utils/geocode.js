const request = require("request")

const geocode=(location, callback)=>
{
   const url= "http://api.positionstack.com/v1/forward?access_key=9a6ba5521e2912df8fb1b4bf968c91c4&query=%20"+location+"&limit=1"
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("unable to connect location ", undefined)
        }
        else if (response.body.error) {
            callback("wrong input", undefined)
        }
        else {

            callback(undefined,
                    {
                     lat: response.body.data[0].latitude,
                     long: response.body.data[0].longitude,
                })
        }
    })
}


module.exports=geocode


// const url = "http://api.positionstack.com/v1/forward?access_key=9a6ba5521e2912df8fb1b4bf968c91c4&query=%20Delhi&limit=1"

// request({url:url,json:true},(error,response)=>
// {
//     if(error)
//     {
//         console.log("unable to connect to network") //ios level error
//     }
//     else if(response.body.error)
//     {
//         console.log("Wrong input") //bad request or wrong input
//     }
//     else{

//     const lat=response.body.data[0].latitude
//     const long=response.body.data[0].longitude
//     console.log(`latitude of location is ${lat} and longitude of location is ${long}`)
//     }
// })
