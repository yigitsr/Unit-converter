HTMLElement.prototype.toggleClass = function(_addClass, _removeClass){
    this.classList.add(_addClass)
    this.classList.remove(_removeClass)
}

function refreshPage(){
    window.location.reload()
}

//miscellaneous
const _performance = document.getElementById('performance')
const _footerYear = document.getElementById('footerYear')
const _perf =  window.performance.now()
const _showDateId = document.getElementById('showDateId')
const _showDateBtn = document.getElementById('showDateBtn')

_showDateBtn.addEventListener('click', showDate)

function showDate(){
    _showDateId.innerHTML = 'Full date is: ' + new Date()
}

_footerYear.innerHTML = 'Year is: ' + new Date().getFullYear()
// _footerDate.innerHTML =  new Date(Date.now())

_performance.innerHTML = 'Performance is: '  +  window.performance.now()


function showToast(){
    const _toast = document.getElementById('toast')
    _toast .classList.add('show')
    setTimeout(() => {
        _toast.classList.remove('show')
    }, 2000);
}