// // s3elect the output element
// const output_y = document.querySelector('.output-y');
// const output_m = document.querySelector('.output-m');
// const output_d = document.querySelector('.output-d');
// const submit = document.querySelector('.submit');

// let isValid = false;
// const input_y = document.querySelector('#Year');
// const input_m = document.querySelector('#Month');
// const input_d = document.querySelector('#Day');

// const error_d = document.querySelector('.errorDay');
// const error_m = document.querySelector('.errorMonth');
// const error_y = document.querySelector('.errorYear');


// submit.addEventListener('click', CalculateDate);
// input_d.addEventListener('input', (e) => {
//     if (+input_d.value > 31) {
//         error_d.textContent = 'Must be a valid Day';
//         isValid = false;
//         return;
//     } else {
//         isValid = true;
//         error_d.textContent = '';
//     }
//     if (+input_d.value < 1) {
//         isValid = false;
//         error_d.textContent = 'this field is required';
//         isValid = false;
//         return;
//     } else {
//         error_d.textContent = '';
//     }
// });
// input_m.addEventListener('input', (e) => {
//     if (+input_m.value > 12) {
//         error_m.textContent = 'Must be a valid Month';
//         isValid = false;
//         return;
//     } else {
//         isValid = true;
//         error_m.textContent = '';
//     }
//     if (+input_m.value < 1) {
//         isValid = false;
//         error_m.textContent = 'this field is required';
//         isValid = false;
//         return;
//     } else {
//         error_m.textContent = '';
//     }
// });
// input_y.addEventListener('input', (e) => {
//     if (+input_y.value > 2023) {
//         error_y.textContent = 'Must be a valid Year';
//         isValid = false;
//         return;
//     } else {
//         isValid = true;
//         error_y.textContent = '';
//     }
//     if (+input_y.value < 1) {
//         isValid = false;
//         error_y.textContent = 'this field is required';
//         isValid = false;
//         return;
//     } else {
//         error_y.textContent = '';
//     }
// });

// function CalculateDate() {
//     if(isValid) {
//         let birthday = '$(input_m.value)/$(input_d.value)/$(input_y.value)';
//         console.log(birthday);
//         let birthdayObj = new Date(birthday);
//         let ageDifMs = Date.now() - birthdayObj;
//         let ageDate = new Date(ageDifMs);
//         let ageYear = ageDate.getUTCFullYear() - 1970;
//         let ageMonth = ageDate.getUTCMonth();
//         let ageDay = ageDate.getUTCDate() - 1;
//         output_y.textContent = ageYear;
//         output_m.textContent = ageMonth;
//         output_d.textContent = ageDay;
//     } else {
//         alert('Please enter a valid date');
//     }
// } 

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

function checkValidDay() {
    if (+input_d.value > 31 || +input_d.value < 1) {
        error_d.textContent = 'Must be a valid Day';
        return false;
    } else {
        error_d.textContent = '';
        return true;
    }
}

function checkValidMonth() {
    if (+input_m.value > 12 || +input_m.value < 1) {
        error_m.textContent = 'Must be a valid Month';
        return false;
    } else {
        error_m.textContent = '';
        return true;
    }
}

function checkValidYear() {
    if (+input_y.value > 2023 || +input_y.value < 1) {
        error_y.textContent = 'Must be a valid Year';
        return false;
    } else {
        error_y.textContent = '';
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
