let input = document.querySelector(".inp");
let button = document.querySelector(".btn");
let div = document.querySelector(".main");
let dataDiv = document.querySelector(".Data");

async function getData() {
  const response = await fetch(`https://api.weatherstack.com/current?access_key=acfc7d4fdcc93bffec77e5554335759d&query=${input.value}`);
  let data = await response.json()
  console.log(data)
  dataDiv.innerHTML = `      <h1>${data.current.temperature}°C</h1>
      <h3>${data.current.weather_descriptions[0]}</h3>
      <h3>${data.request.query
      }</h3>
    </div>
    <div class="End">
            <hr>
      <div class="Feels"> 
      
      <h4>Feels Like </h4>
      
      
      <h3>${data.current.feelslike}°C</h3>
      </div>
      <div class="hum">
      <h4>humidity</h4>
        <h3>${data.current.humidity}%</h3>
        `
}

button.addEventListener("click", () => {
  getData()
})