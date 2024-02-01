const _ageSpan = document.getElementById('ageSpan')
const _feetSpan = document.getElementById('feetSpan')
const _mileSpan = document.getElementById('mileSpan')
const _weightSpan = document.getElementById('weightSpan')
const _fahSpan = document.getElementById('fahSpan')

function calculateAge(){            
    // const _year = parseInt(document.getElementById('year')["value"]);
    const _year =  parseInt(document.getElementById('year').value)
    _ageSpan.innerHTML =  'You are ' + (new Date().getFullYear() - _year) + ' years old'
}

function convertFeetToMeter(){
    const _feet = parseInt(document.getElementById('feet').value)
    const _feetFormula =  Math.ceil(_feet / 3.28084) 
    _feetSpan.innerHTML = _feet + ' feet = ' + _feetFormula + ' m'
}

function convertMileToMeter(){
    const _mile = parseInt(document.getElementById('mile').value)
    const _mileFormula = _mile * 1.609344
    _mileSpan.innerHTML = _mile +  ' miles = '  + _mileFormula  + ' km'

    if(_mileFormula > 80)
     setTimeout(() => {
        createModal("Slow down! You're too fast!")
     }, 500);
    else
    setTimeout(() => {
        createModal("You're fine, not fast!")
    }, 500);
        
}

function convertPoundToKilo(){
    const _weight = parseInt(document.getElementById('pound').value)
    const _poundFormula = _weight / 2.2046 
    _weightSpan.innerHTML = _weight + ' lbs = ' + _poundFormula + ' kg'

    if(_poundFormula > 100)
        setTimeout(() => {
            createModal("You're fat!")
        }, 500);
        
}

function convertFahToCel(){
    const _fahr = document.getElementById('fahrenheit').value
    const _fahFormula = ( _fahr -32 ) / 1.8
    _fahSpan.innerHTML = _fahr + '°F = ' + _fahFormula + '°C '
 }