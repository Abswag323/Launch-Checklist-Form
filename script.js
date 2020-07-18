// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let index = Math.floor(Math.random() * json.length);
         const target = document.getElementById('missionTarget');
            target.innerHTML = `
                  <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[index].name}</li>
                        <li>Diameter: ${json[index].diameter}</li>
                        <li>Star: ${json[index].star}</li>
                        <li>Distance from Earth: ${json[index].distance}</li>
                        <li>Number of Moons: ${json[index].moons}</li>
                      </ol>
                     <img src="${json[index].image}">
                   `;
      });
    
   });  








   form.addEventListener("submit", function(event) {
     let pilotName = document.querySelector("input[name=pilotName]");
     let copilotName = document.querySelector("input[name=copilotName]");
     let fuelLevel = document.querySelector("input[name=fuelLevel]");
     let cargoMass = document.querySelector("input[name=cargoMass]");
      
     if (pilotName.value === "" || copilotName.value === "" || 
            fuelLevel.value === "" || cargoMass.value === "" ) {
            alert("All fields are required!");
            event.preventDefault();
      };
      
      if (typeof(pilotName.value) !== 'string' || typeof(copilotName.value) !== 'string' || 
            isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
               alert("Please enter valid information!")
               event.preventDefault();
            };
         
      document.getElementById("pilotStatus").innerHTML = `${pilotName.value} Ready`;
      document.getElementById("copilotStatus").innerHTML = `${copilotName.value} Ready`;
      
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById('launchStatus');

      if (fuelLevel.value < 10000) {
         let fuelStatus = document.getElementById('fuelStatus');
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = 'Fuel level too low for launch!';
         launchStatus.innerHTML = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      } else if (cargoMass.value > 10000) {
         let cargoStatus = document.getElementById('cargoStatus');
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML = 'Cargo mass too high for launch!';
         launchStatus.innerHTML = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      } else {
         launchStatus.style.color = 'green';
         launchStatus.innerHTML = 'Shuttle is ready for launch!'
      }
      event.preventDefault();    
   
   
   
   });
 });


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
