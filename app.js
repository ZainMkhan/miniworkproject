//----------IPTV----------//
//Selecting Inputs
const userInput = document.getElementById('user-input');
const passInput = document.getElementById('password-input');
//Selecting TextArea and Submit Button
const textArea = document.getElementById('iptv-text');  
const submitBtn = document.getElementById('form-submit');
//Adding Onclick Event
submitBtn.addEventListener('click', submitForm);
//Functionality...
function submitForm(e){
    e.preventDefault();
    let username = userInput.value;
    let password = passInput.value;
    let server = document.getElementById('server');

    if(server.value === 'hybrid'){
        server = "http://hybridtv.live:8080";
    }
    if(server.value === 'dream'){
        server = "http://b1g.us/";
    }
    if(server.value === 'fariya'){
        server = "http://fariya.webo.asia:80";
    }
    if(username === ''){
        let error = document.getElementById('error-elem');
        error.classList.add('error');
        error.innerText = "Please enter a Username";
    }
    if(password === ''){
        let error = document.getElementById('error-elem2');
        error.classList.add('error');
        error.innerText = "Please enter a password";
    }
    textArea.textContent = 
`
IPTV

Username = ${username}
Password = ${password}
Server = ${server}`;
}
//Copy Button Function; 
const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', copyForm);
//---------------------------//
function copyForm(){
    textArea.select();
    document.execCommand('copy');
    copyBtn.innerText = "Copied!"
}
//--------------------------Netflix--------------------//
const netEmailInput = document.getElementById('email-input');
const netPassInput = document.getElementById('pass-input');
const netProfileInput = document.getElementById('profile-input');
const netPinInput = document.getElementById('pin-input');
// Selecting Submit Button for Netflix.
const netSubmit = document.getElementById('netflix-submit');
//Selecting Netflix TextArea...
const netTextArea = document.getElementById('net-text');
//Calling onClick Event on Netflix Submit Button...
netSubmit.addEventListener('click', netFormSubmit);
//Adding Functionality to the function..
function netFormSubmit(e){
    e.preventDefault();
    let email = netEmailInput.value;
    let password = netPassInput.value;
    let profileName = netProfileInput.value;
    let pin = netPinInput.value;
    if(email === ''){
        let error = document.getElementById('net-email-error');
        error.innerText = "*Please enter a Email*"
    }
    if(email !== ''){
        let error = document.getElementById('net-email-error');
        error.innerText = "";
    }
    if(password === ''){
        let error = document.getElementById('net-pass-error');
        error.innerText = "*Please enter a Password*"
    }
    if(password !== ''){
        let error = document.getElementById('net-pass-error');
        error.innerText = "";
    }
    if(profileName === ''){
        let error = document.getElementById('net-profile-error');
        error.innerText = "*Please enter a Profile*"
    }
    if(profileName !== ''){
        let error = document.getElementById('net-profile-error');
        error.innerText = "";
    }
    if(pin === '' || pin > 3){
        let error = document.getElementById('net-pin-error');
        error.innerText = "*Please enter a Pin of 4 Numbers*"
    }
    if(pin !== ''){
        let error = document.getElementById('net-pin-error');
        error.innerText = "";
    }
    netTextArea.textContent = `
Netflix 

Email: ${email}
Password: ${password}
Profile: ${profileName}
Pin: ${pin}
*It is to advise you that incase if any changes made in account which effects other users profiles and such will result in your access being REVOKED.*
Don't change account details such as email, password, profile name, number, or billing info. If you do not comply with these instructions your access will be revoked without warning. For *Single Screen Users* do not  login in more than 1 device.
`;
}
// Netflix TextArea Copy Button
const netCopy = document.getElementById('netflix-copy');
netCopy.addEventListener('click', function(){
    netTextArea.select();
    document.execCommand('copy');
})

