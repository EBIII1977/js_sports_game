let reset = 0
let team1_shots = 0
let team2_shots = 0
let team1_numgoals = 0
let team2_numgoals = 0


const teamone_shoot_button = document.querySelector("#teamone-shoot-button")
const teamone_numgoals = document.querySelector("#teamone-numgoals")
teamone_shoot_button.addEventListener("click", function() {
    team1_shots += 1
    const teamoneNumshots = document.querySelector("#teamone-numshots")
    teamoneNumshots.innerText = team1_shots

    if (Math.random() < 0.5) {
        team1_numgoals += 1
        console.log (team1_numgoals)
        teamone_numgoals.innerText = team1_numgoals
    
    }
   
})

const teamtwo_shoot_button = document.querySelector("#teamtwo-shoot-button")
const teamtwo_numgoals = document.querySelector("#teamtwo-numgoals")
teamtwo_shoot_button.addEventListener("click", function() {
    team2_shots += 1
    const teamtwoNumshots = document.querySelector("#teamtwo-numshots")
    teamtwoNumshots.innerText = team2_shots

    if (Math.random() > 0.5) {
        team2_numgoals += 1
        console.log (team2_numgoals)
        teamtwo_numgoals.innerText = team2_numgoals
    }

})

const reset_button = document.querySelector("#reset-button")
reset_button.addEventListener("click", function() {
    reset += 1
    team1_shots = 0
    team2_shots = 0
    team1_numgoals = 0
    team2_numgoals = 0
    
    // Refresh Teams Shot Taken

    const numresets = document.querySelector("#num-resets")
    numresets.innerText = reset
    const teamoneNumshots = document.querySelector("#teamone-numshots")
    teamoneNumshots.innerText = team1_shots
    const teamtwoNumshots = document.querySelector("#teamtwo-numshots")
    teamtwoNumshots.innerText = team2_shots

    // Refresh Team Goals

    const teamone_numgoals = document.querySelector("#teamone-numgoals")
    teamone_numgoals.innerText = team1_numgoals
    const teamtwo_numgoals = document.querySelector("#teamtwo-numgoals")
    teamtwo_numgoals.innerText = team2_numgoals
})