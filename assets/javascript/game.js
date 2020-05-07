const resetbutton = document.querySelector("#reset-button");
const numberofresets = document.querySelector("#num-resets");
let resetnum = 0
    resetbutton.addEventListener("click" , function () {
        teamonegoals.innerHTML = teamonegoals = 0
        teamoneshots.innterHTML = teamoneshots = 0
        teamtwonumshots.innerHTML = teamtwoshots = 0
        teamtwonumgoals.innerHTML = teamtwogoals = 0
    console.log ("resetbutton clicked");
   numberofresets.innerHTML = resetnum += 1
    
})
const teamoneshootbutton = document.querySelector("#teamone-shoot-button");
const teamonenumshots = document.querySelector("#teamone-numshots");
const teamonenumgoals = document.querySelector("#teamone-numgoals");
let teamoneshots = 0
let teamonegoals = 0
teamoneshootbutton.addEventListener("click" , function () {
    
    teamonenumshots.innerHTML = teamoneshots += 1
    if (Math.random() <0.3){
        teamonenumgoals.innerHTML = teamonegoals += 1
    }

})

const teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");
const teamtwonumshots = document.querySelector("#teamtwo-numshots");
const teamtwonumgoals = document.querySelector("#teamtwo-numgoals");
let teamtwoshots = 0
let teamtwogoals = 0
    teamtwoshootbutton.addEventListener("click" , function () {
    
    teamtwonumshots.innerHTML = teamtwoshots += 1;
    if (Math.random()  <0.3){
        teamtwonumgoals.innerHTML = teamtwogoals += 1;
    }

})
