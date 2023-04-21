

let profile_username = document.getElementById('profile_username')
let profile_points = document.getElementById('profile_points')
document.getElementById('logout_button').addEventListener('click', function(){
    localStorage.removeItem('logged')
})

profile_username.innerHTML = 'Username: ' + localStorage.getItem('username')
if(localStorage.getItem('points') == null){
    profile_points.innerHTML = 'Longevity Points: 0'
}else{
    profile_points.innerHTML = 'Longevity Points: ' + localStorage.getItem('points')
}
