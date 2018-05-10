class Weather {
    constructor(city, state){
        this.apiKey ='07dc5ac565c32740';
        this.city = city;
        this.state= state;
    }
async getWeather(){
    const response = await fetch (`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`
    );

    const responseData = await response.json();
    console.log(responseData);
    return responseData.current_observation;
}

changeLocation(city, state){
    this.city=city;
    this.state=state;
}

}


