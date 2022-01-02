

let email, passwd;


document.getElementById('email').addEventListener('input',function(e){
    e.preventDefault();
    let t =e.target;
    email=t.value
    console.log(email)
})

document.getElementById('password').addEventListener('input',function(e){
    e.preventDefault();
    let t =e.target;
    passwd=t.value
    console.log(passwd)
})


// document.addEventListener()

document.getElementById('sub').addEventListener('click',function(e){
    e.preventDefault();
    localStorage.setItem(email, passwd)
})