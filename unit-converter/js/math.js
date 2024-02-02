function calculateSquareRoot(){
    const _squareRootSpanFirst = document.getElementById('sqrtRootSpanFirst')
    const _squareRootSpan = document.getElementById('sqrtRootSpan')
    const _sqVal = document.getElementById('sqRootId').value

    if(_sqVal < 0)
        setTimeout(() => {
            _squareRootSpan.innerHTML  = createModal('Enter a positive number')
        }, 500);
    else
    _squareRootSpanFirst.innerHTML = 'Number = ' + _sqVal
     _squareRootSpan.innerHTML = 'Square root is: ' + (Math.sqrt(_sqVal))

}

function checkIfPrime(){
    const _primeSpanFirst = document.getElementById('primeSpanFirst')
    const _primeSpan = document.getElementById('primeSpan')
    const _primeVal = document.getElementById('primeId').value
    const _primeResult = document.getElementById('prime-result')

    let isPrime = true

    if(_primeVal <= -1)
        _primeSpan.innerHTML = createModal('Enter a positive number')

    else if(_primeVal === '1') // daha stabil çalışır / tipine de bakar
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
            _primeSpanFirst.innerHTML = 'Number = ' + _primeVal
            _primeSpan.innerHTML = _primeVal + ' is a prime number ✅'
            // _primeResult.classList.add('correct-answer')
            _primeResult.toggleClass('correct-answer', 'wrong-answer')
        }
        else{
            _primeSpanFirst.innerHTML = 'Number = ' + _primeVal
            _primeSpan.innerHTML =  _primeVal + ' is not a prime number. ❌'
            // _primeResult.classList.add('wrong-answer')
            _primeResult.toggleClass('wrong-answer', 'correct-answer')
        }
    }
}

function findDivisors(){
    const _divisorSpanFirst = document.getElementById('divisorSpanFirst')
    const _divisorSpan = document.getElementById('divisorSpan')
    const _divisorVal = document.getElementById('divisorId').value
    const arr = [1]

    _divisorSpanFirst.innerHTML = 'Number = ' + _divisorVal

    for(let i=2; i<= Math.floor(_divisorVal/2); i++){
        if(_divisorVal % i == 0)
        arr.push(i)
    }
    if(_divisorVal <= 1)
        _divisorSpan.innerHTML = createModal('Enter a positive number')
    else if(_divisorVal != 1)
        arr.push(_divisorVal)
    _divisorSpan.innerHTML = 'Divisors are: ' + arr 
}

function findFactorial(){
    const _factSpanFirst = document.getElementById('factSpanFirst')
    const _factSpan = document.getElementById('factSpan')
    const _factVal = document.getElementById('factId').value
     function factorialize(num) {
        if (num < 0)
        setTimeout(() => {
            _factSpanFirst.innerHTML  = createModal('Enter a positive number!')
        }, 300);
        else if (num == 0) 
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
      }
      
      _factSpanFirst.innerHTML = 'Number = ' + _factVal
      _factSpan.innerHTML =  _factVal +'! = ' + factorialize(_factVal)

}