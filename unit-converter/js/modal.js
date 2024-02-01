function createModal(_text){
    let _modal = document.querySelector('.modal');
    if(!_modal){
        _modal = document.createElement('div');
        _modal.className = 'modal flex';
        document.documentElement.appendChild(_modal); 
    }
    _modal.innerHTML = _text + '<div class="modal-close" style="display:flex" onclick="closeModal()">&times;</div>';
}

function closeModal(){
    let _modal = document.querySelector('.modal');
    if(_modal )
        _modal.remove()
}