const inputValue = document.getElementById("value-el")
const convertBtn = document.getElementById("convert-el")
const lengthCon = document.getElementById("length-conversion")
const volumeCon = document.getElementById("volume-conversion")
const massCon = document.getElementById("mass-conversion")
const lengthHeading = document.getElementById("length-heading")
const volumeHeading = document.getElementById("volume-heading")
const massHeading = document.getElementById("mass-heading")

let value = ""

function convertLength(){
    value = Number(inputValue.value)
    length =  `${value} meters = ${(value * 3.28084).toFixed(3)} feets | ${value} feets = ${(value / 3.28084).toFixed(3)} meters`
    lengthHeading.textContent = "Length (Meter/Feet)"
    lengthCon.textContent = length
    
}

function convertVolume(){
    value = Number(inputValue.value)
    volume =  `${value} liters = ${(value * 0.219969).toFixed(3)} gallons | ${value} gallons = ${(value / 0.219969).toFixed(3)} liters`
    volumeHeading.textContent = "Volume (Liters/Gallons)"
    volumeCon.textContent = volume
}

function convertMass(){
    value = Number(inputValue.value)
    mass =  `${value} kilogram = ${(value * 2.20462).toFixed(3)} pounds | ${value} pounds = ${(value / 2.20462).toFixed(3)} kilogram`
    massHeading.textContent = "Mass (Kilograms/Pounds)"
    massCon.textContent = mass
}

convertBtn.addEventListener("click", function(){
    convertLength()
    convertVolume()
    convertMass()
})
