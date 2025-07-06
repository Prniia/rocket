let startBox = document.querySelector('.start-box');
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let errorElement = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100');
let timerNum = document.querySelector('.c100 > span');
let loadingMessage = document.querySelector('.message .loading');
let successMessage = document.querySelector('.message .success');

startCounter.addEventListener('click' , function(e) {
    let seconds = parseInt(inputCounter.value)

    if(isNaN(seconds)) {
        return toggletErrorMessage({ show : true, message : 'زمان را بدرستی وارد کنید' });
    }

    toggletErrorMessage({ show : false});
    timerCircle.style.display = 'block';
    timerNum.textContent = seconds;
    loadingMessage.style.display = 'block';
    successMessage.style.display = 'none';


    let originalSeconds = seconds;
    let lastPercent = 'p100';
    let timerId = setInterval(() => {
        if (lastPercent) timerCircle.classList.remove(lastPercent);

        if(seconds <= 1) {
            clearInterval(timerId);
            startBox.classList.add('active');
            timerCircle.style.display = 'none';
            loadingMessage.style.display = 'none';
            successMessage.style.display = 'block';
            inputCounter.value = ''
            return;
        }


        seconds -= 1;
        timerNum.textContent = seconds;
        let percent = lastPercent = `p${Math.abs(Math.floor(((originalSeconds - seconds) / originalSeconds) * 100) - 100)}`;
        timerCircle.classList.add(percent);
    }, 1000);

})

let toggletErrorMessage = ({ show, message }) => {
    if(show){
        errorElement.textContent = message;
        errorElement.classList.add('active');
    }
    else{
        errorElement.classList.remove('active');
    }
}