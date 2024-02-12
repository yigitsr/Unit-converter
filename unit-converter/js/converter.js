function calculateAge(){            
    // const _year = parseInt(document.getElementById('year')["value"]);
    const _ageSpan = document.getElementById('ageSpan')
    const _year =  parseInt(document.getElementById('year').value)
    const _ageDiv = document.getElementById('age-div')
    const _result = (new Date().getFullYear() - _year) 

    _ageSpan.innerHTML =  'You are ' + _result + ' years old'

    if(_result >= 18)
        _ageDiv.toggleClass('correct-answer', 'wrong-answer')
    else
        _ageDiv.toggleClass('wrong-answer', 'correct-answer')

}

function convertFeetToMeter(){
    const _feetSpan = document.getElementById('feetSpan')
    const _feet = parseInt(document.getElementById('feet').value)
    const _feetFormula =  Math.ceil(_feet / 3.28084) 
    _feetSpan.innerHTML = _feet + ' feet = ' + _feetFormula + ' m'
}

function convertMileToMeter(){
    const _mileSpan = document.getElementById('mileSpan')
    const _mile = parseInt(document.getElementById('mile').value)
    const _mileFormula = _mile * 1.609344
    _mileSpan.innerHTML = _mile +  ' miles = '  + _mileFormula  + ' km'
}

function convertPoundToKilo(){
    const _weightSpan = document.getElementById('weightSpan')
    const _weight = parseInt(document.getElementById('pound').value)
    const _poundFormula = _weight / 2.2046 
    _weightSpan.innerHTML = _weight + ' lbs = ' + _poundFormula + ' kg'
        
}

function convertFahToCel(){
    const _fahSpan = document.getElementById('fahSpan')
    const _fahr = document.getElementById('fahrenheit').value
    const _fahFormula = ( _fahr -32 ) / 1.8
    _fahSpan.innerHTML = _fahr + '°F = ' + _fahFormula + '°C '
 }
 
 function convertOzToMl(){
    const _ounceSpan = document.getElementById('ounceSpan')
    const _ounce = document.getElementById('ounce').value
    const _ounceFormula = _ounce * 29.57

    _ounceSpan.innerHTML = _ounce + ' oz = ' + _ounceFormula + ' ml'
 }

 function convertGallonToLitres(){
    const _gallonSpan = document.getElementById('gallonSpan') 
    const _gallon = document.getElementById('gallon').value
    const _gallonFormula = _gallon * 3.78

    _gallonSpan.innerHTML  = _gallon + ' gallon = ' + _gallonFormula + ' lt' 

 }