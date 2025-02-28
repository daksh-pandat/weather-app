const Button = document.getElementById("Button");
const input = document.getElementById("city");
const temp = document.getElementById("temprature");
const add = document.getElementById("address");
const aqi = document.getElementById("aqi");
const condition = document.getElementById("condition");
const g = document.getElementById("child-container"); // The div whose background to change

async function getData(city) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=562f6fc22f78415abfe134859252702&q=${city}&aqi=yes`
  );
  return await promise.json();
}

Button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);

  const tempC = result.current.feelslike_c; // Get temperature in Celsius

  temp.innerText = `${tempC}°C, ${result.current.feelslike_f}°F`;
  add.innerText = `Country: ${result.location.country}, City: ${result.location.name}`;
  condition.innerText = `${result.current.condition.text}`;

   

  //  Change background based on temperature
  changeBackground(tempC);
});

// **Function to Change Background Based on Temperature**
function changeBackground(tempC) {
  if (tempC <= 10) {
    g.style.backgroundImage = "url('coldbg.webp')"; // Add a cold weather image
  } else if (tempC > 10 && tempC <= 20) {
    g.style.backgroundImage = "url('goodbg.webp')"; // Moderate weather
   } else if (tempC > 20 && tempC <= 30) {
      g.style.backgroundImage = "url('goodbg.webp')";
  } else if( tempC> 30 && tempC <40) {
    g.style.backgroundImage = "url('hotbg.webp')"; // Hot weather
  }
  else{
   g.style.backgroundImage = "url('veryhotbg.webp')";
  }
}

   