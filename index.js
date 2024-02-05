var input = document.getElementById('user-input')
var btnGuess = document.getElementById('guess-button')
var value = document.getElementById('random-no')
var count = 1;
var checkingNumber = document.getElementById('check')
var setCount = document.getElementById('count')
var inputtedNumber = ''
var randomNumber = Math.floor(Math.random()*101)
console.log(randomNumber)
input.addEventListener('input',function(e){
    inputtedNumber = e.target.value
})
btnGuess.addEventListener('click',function(){
    var guess = document.getElementById('user-input').value;
    if(inputtedNumber===''){
        alert('Enter number')
    }
    if(guess<0 || guess>100){
        alert('Enter between 1 and 100')
    }
    else{
        if(guess<randomNumber){
            checkingNumber.textContent = 'Your guess is too Low';
            value.textContent = ''
            setCount.textContent = 'Your count: '+count
            count+=1   
        }
        else if(guess>randomNumber){
            checkingNumber.textContent = 'Your guess is too High';
            value.textContent = ''
            setCount.textContent = 'Your count: '+count
            count+=1        
        }
        else{
            checkingNumber.textContent = 'Yup!! correct one'
            value.textContent = 'Random number is: '+randomNumber
            setCount.textContent = 'Your count: '+count
            count+=1
        }
    }
    input.value = ''
    inputtedNumber = ''
})
input.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        var guess = document.getElementById('user-input').value;
    if(inputtedNumber===''){
        alert('Enter number')
    }
    if(guess<0 || guess>100){
        alert('Enter between 1 and 100')
    }
    else{
        if(guess<randomNumber){
            checkingNumber.textContent = 'Your guess is too Low';
            value.textContent = ''
            setCount.textContent = 'Your count: '+count
            count+=1   
        }
        else if(guess>randomNumber){
            checkingNumber.textContent = 'Your guess is too High';
            value.textContent = ''
            setCount.textContent = 'Your count: '+count
            count+=1        
        }
        else{
            checkingNumber.textContent = 'Yup!! correct one'
            value.textContent = 'Random number is: '+randomNumber
            setCount.textContent = 'Your count: '+count
            count+=1
        }
    }
    input.value = ''
    inputtedNumber = ''
    }
})
