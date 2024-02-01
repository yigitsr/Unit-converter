const _squareRootSpan = document.getElementById('sqrtRootSpan')
const _primeSpan = document.getElementById('primeSpan')
const _divisorSpan = document.getElementById('divisorSpan')
const _divisorSpanFirst = document.getElementById('divisorSpanFirst')

function calculateSquareRoot(){
    const _sqVal = document.getElementById('sqRootId').value
    _squareRootSpan.innerHTML = 'Square root is: ' + (Math.sqrt(_sqVal))

}

function checkIfPrime(){
    const _primeVal = document.getElementById('primeId').value

    let isPrime = true

    if(_primeVal === '1') // daha stabil çalışır / tipine de bakar
    // if(_primeVal == 1)  // sadece value'yu kontrol eder
        _primeSpan.innerHTML = '1 is neither prime nor composite number'

    else if(_primeVal > 1){
        for(let i=2; i< _primeVal; i++){
            if(_primeVal %i ==0){
                isPrime = false
                break
            }
        }

        if(isPrime)
        {
            _primeSpan.innerHTML = _primeVal + ' is a prime number'
        }
        else{
            _primeSpan.innerHTML = 'Oops! ' + _primeVal + ' is not a prime number.'
        }
    }
}

function findDivisors(){
    const _divisorVal = document.getElementById('divisorId').value
    const arr = [1]

    _divisorSpanFirst.innerHTML = 'Number = ' + _divisorVal

    for(let i=2; i<= Math.floor(_divisorVal/2); i++){
        if(_divisorVal % i == 0)
        arr.push(i)
    }
    if(_divisorVal != 1)
        arr.push(_divisorVal)
    _divisorSpan.innerHTML = 'Divisors are: ' + arr 
}