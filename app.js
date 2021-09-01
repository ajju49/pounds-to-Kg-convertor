
const form = document.querySelector('form');
const input = document.querySelector('input');
let results = document.querySelector('span');
let poundsToKG;


//add an event listener to the form

form.addEventListener('submit', function(e){
    e.preventDefault();

   

    if ((input.value <= 0) || (isNaN(input.value))){
        results.classList.add('error');
        results.innerHTML = "Please enter a value number!"
        //timeout fn will erase msg after 2sec.
        setTimeout(function(){
            results.innerHTML = '';

            results.classList.remove('error');
        }, 3000)
        input.value = '';
    } else {
        poundsToKG = Number(input.value) / 2.2;
        results.classList.add('no-error');
        results.innerHTML = `${poundsToKG.toFixed(2)}`;

        //timeout fn will erase msg after 5sec.
        setTimeout(function(){
            results.innerHTML = '';
            input.value = '';
            results.classList.remove('no-error');
        }, 5000)

    }


})