const request=require('request')

const forecast =(latitude,longitude,callback)=>{
	const url="http://api.weatherstack.com/current?access_key=407f5eb6955e9398ec53cfb14ff5d60f&query=" + latitude + "," + longitude + "&units=f"
    

    request({ url, json: true },(error,{body})=>{
    	if(error){
    		callback('Unable to connect weather services',undefined)

    	}else if(body.error){
    		callback('Unable to find location',undefined)

    	}else{
    		callback(undefined,body.current.weather_descriptions + ". The temperature is " + body.current.temperature + " degrees out. The humidity is " + body.current.humidity + " degrees out.")

    	}
    })
}

module.exports=forecast