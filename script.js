
const Weather = async () => {
    let City = document.getElementById('city');
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City.value}&appid=8164585eaa8260ea2d511fc5e78c95d5&units=metric`)
        // .then(response => { console.log(JSON.stringify(response.value)) })
    // .catch(err => { console.log(err) });
    const data = await response.json();
    if (response.status == 200)
    { 
        let Location = document.getElementById('location');
        let Deg = document.getElementById('deg');
        Location.innerText = data.name
        Deg.innerText = Math.round(data.main.temp) + "°C";
        let Hvalue = document.getElementById('hvalue');
        Hvalue.innerText = data.main.humidity + "%";
        let Wvalue = document.getElementById('wvalue');
        Wvalue.innerText = data.wind.speed + "%";
        City.value = '';
        if (data.main.temp <20 && data.main.temp>0)
        {
            const rain = './images/rain.png';
            let Degimg = document.getElementById('degimg');
            Degimg.innerHTML=`<img src=${rain}/>`
        }
        else if (data.main.temp < 0) {
            const snow = './images/snow.png';
            let Degimg1 = document.getElementById('degimg');
            Degimg1.innerHTML=`<img src=${snow}/>`
        }
        else {
            const cloud = './images/clouds.png';
            let Degimg2 = document.getElementById('degimg');
            Degimg2.innerHTML=`<img src=${cloud}/>`
        }
        

        
        
        }
    console.log(data);
    // console.log('hi');
}