let login_text = document.getElementById('login_text')
let login_wrap = document.getElementById('login_wrap')

if(localStorage.getItem('logged')){
    login_wrap.innerHTML = `<h4 class="user_text" >${localStorage.getItem('username')}</h4>`
}else{
    login_wrap.innerHTML='<a class="user_text" href="pages/login.html">Login</a>'
}