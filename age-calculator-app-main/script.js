//  selecting output elements

const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitBtn = document.querySelector(".submit-btn");

// input elements
let isValid = false;
const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");

// error elems

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

submitBtn.addEventListener("click", calculated);

inputDay.addEventListener("input", e => {
    if (+inputDay.value > 31) {
        errorDay.textContent = "Must be a valid date";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorDay.textContent = "";
    }
    if(+inputDay.value === 0){
        isValid = false;
        errorDay.textContent = "This field is required";
        isValid = false;
        return;
    }
    else{
        errorDay.textContent = "";

    }
});

inputMonth.addEventListener("input", e => {
    if (+inputMonth.value > 12) {
        errorMonth.textContent = "Must be a valid date";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorMonth.textContent = "";
    }
    if(+inputMonth.value === 0){
        isValid = false;
        errorMonth.textContent = "This field is required";
        isValid = false;
        return;
    }
    else{
        errorMonth.textContent = "";

    }
});

inputYear.addEventListener("input", e => {
    if (+inputYear.value > 2023) {
        errorYear.textContent = "Must be a valid date";
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorYear.textContent = "";
    }
    if(+inputYear.value === 0){
        isValid = false;
        errorYear.textContent = "This field is required";
        isValid = false;
        return;
    }
    else{
        errorYear.textContent = "";

    }
});

function calculated(){
    if(isValid){
        let birthDay = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthDay);
        let birthDayObj = new Date(birthDay);
;
        
        let ageDiffMill = Date.now() - birthDayObj;
        
        let ageDate = new Date(ageDiffMill);

        let ageYears = ageDate.getUTCFullYear() - 1970;
          console.log(ageYears);
          let ageMonth = ageDate.getUTCMonth();
          console.log(ageMonth);
          
          let ageDay = ageDate.getUTCDate() - 1;
          console.log(ageDay);

        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYears;
    }
    else{
        alert('error');
    }
}




