
let userId =  /^[a-z0-9]{5,12}$/


let txtUser = document.getElementById('txtUser')
let userError = document.getElementById('userError')
let submit = document.getElementById('btnCheck')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(userId.test(txtUser.value)){
        userError.textContent = 'ID hợp lệ'
        userError.style.color = 'green'
    }
    else{
        userError.textContent = 'ID không hợp lệ'
        userError.style.color = 'red'
    }
})

let passWord =  /^[a-z0-9]{5,12}$/

let txtPassword = document.getElementById('txtPassword')
let passError = document.getElementById('passError')

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(passWord.test(txtPass.value)){
        passError.textContent = 'Mật khẩu mạnh'
        passError.style.color = 'green'
    }
    else{
        passError.textContent = 'Nhập lại mật khẩu'
        passError.style.color = 'red'
    }
})

