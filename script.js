let all_test = document.getElementById('all-tests');
let correct = document.getElementById('correct');
let incorrect = document.getElementById('incorrect');
let button = document.getElementById('submit');
let p = document.getElementById('percent');
let div = document.getElementById('result');
button.addEventListener('click' , function(e){
    if(all_test.value == '' || correct.value == '' || incorrect.value == ''){
        alert('Please enter all values');
        e.preventDefault();
        div.style.display = 'none';
    }
    else if(correct.value  >= all_test.value && incorrect.value  >= all_test.value ) {
        alert('You have entered numbers larger than all tests.');
        e.preventDefault();
        div.style.display = 'none';
    }
    else{
        let value;
        e.preventDefault()
        value = correct.value * 3;
        value -= incorrect.value;
        value /= all_test.value *3;
        value *= 100;
        div.style.display = 'block';
        p.innerHTML = Math.ceil( value )+ '%';
    }
});