
// Select the output element
const output_y = document.querySelector('.output-y');
const output_m = document.querySelector('.output-m');
const output_d = document.querySelector('.output-d');
const submit = document.querySelector('.submit');

// Input elements
const input_y = document.querySelector('#Year');
const input_m = document.querySelector('#Month');
const input_d = document.querySelector('#Day');

// Error element
const error_d = document.querySelector('.errorDay');
const error_m = document.querySelector('.errorMonth');
const error_y = document.querySelector('.errorYear');

const inputValidationDay = document.querySelector('#Day');
const inputValidationMonth = document.querySelector('#Month');
const inputValidationYear = document.querySelector('#Year');


function checkValidDay() {
    if (+input_d.value > 31 || +input_d.value < 1) {
        error_d.textContent = 'Must be a valid Day';
        inputValidationDay.classList.add("invalid");
        return false;
    } else {
        error_d.textContent = '';
        inputValidationDay.classList.remove("invalid");
        return true;
    }
}



function checkValidMonth() {
    if (+input_m.value > 12 || +input_m.value < 1) {
        error_m.textContent = 'Must be a valid Month';
        inputValidationMonth.classList.add("invalid");
        return false;
    } else {
        error_m.textContent = '';
        inputValidationMonth.classList.remove("invalid");
        return true;
    }
}

function checkValidYear() {
    if (+input_y.value > 2023 || +input_y.value < 1) {
        error_y.textContent = 'Must be a valid Year';
        inputValidationYear.classList.add("invalid");
        return false;
    } else {
        error_y.textContent = '';
        inputValidationYear.classList.remove("invalid");
        return true;
    }
}




input_d.addEventListener('input', checkValidDay);
input_m.addEventListener('input', checkValidMonth);
input_y.addEventListener('input', checkValidYear);

function CalculateDate() {
    if(checkValidDay() && checkValidMonth() && checkValidYear()) {
        let birthday = `${input_m.value}/${input_d.value}/${input_y.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDifMs = Date.now() - birthdayObj;
        let ageDate = new Date(ageDifMs);
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 1;
        output_y.textContent = ageYear;
        output_m.textContent = ageMonth;
        output_d.textContent = ageDay;
    } else {
        alert('Please enter a valid date');
    }
} 

submit.addEventListener('click', CalculateDate);
