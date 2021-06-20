let wheather ={
    api:"ab8548c699f4e68db3393d00ec9cd91d",
    displayWheather:function(data){
        if(data.cod==="404"){
            alert("city not found")
        }
        const{name} = data;
        const{icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const{speed}=data.wind
        console.log(name,temp,humidity,speed,description,icon)
        document.querySelector(".city").innerText="Wheather in "+name
        document.querySelector(".temp").innerText=temp +" °C"
        document.querySelector(".description").innerText=description
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png"
        document.querySelector(".wind-speed").innerText="wind speed: "+speed+' km/hr'
        document.querySelector(".humidity").innerText="humidity: "+humidity+" %"


    },
    fetchWheather:function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
        +city
        +'&units=metric'
        +'&appid=ab8548c699f4e68db3393d00ec9cd91d#')
        .then((response)=>response.json())
        .then((data)=>this.displayWheather(data))
    }
}

document.querySelector(".search button").addEventListener("click",()=>{ 
    let value = document.querySelector(".search-bar").value
    if(!value){
        alert("Please enter a city name")
    }
    wheather.fetchWheather(value)
})
document.body.addEventListener("keypress",(e)=>{
    if(e.code==="Enter"){
        let value = document.querySelector(".search-bar").value
        if(!value){
            alert("Please enter a city name")
        }
        wheather.fetchWheather(value)
    }
})