document.getElementById('login').addEventListener('click',(e) =>{
    console.log('log in clicked')
    let a = document.createElement('a')
    // a.setAttribute('src','loginform/loginform.html')
    location.href = 'loginform/loginform.html'
})

document.getElementById('signup').addEventListener('click',(e)=>{
    console.log('signup clicked')
    location.href = 'loginform/signupform.html'
})