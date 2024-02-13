function renderFooter(){
    return ` 
    <p> Made with ❤ by <a href="https://yigitsereflioglu.dev" target="_blank"> Yigit S</a></p>
    <p>Copyright © 2021-<span id="year-span"></span> Yigit S. All rights reserved.</p> 
    `
}

function load(){
    document.getElementById('footer-id').innerHTML = renderFooter()
    document.getElementById('year-span').innerHTML = new Date().getFullYear()
}

load()