// Validating
function validateInput(args) {
    for (let i = 0; i < arguments.length; i++) {
      if (!!arguments[i] == false || arguments[i] < 0) {
        return false;
      }
    }
    return true;
  }

// Calculating
const calculateIBM = (weight, height) => {
    return (weight / (height ** 2));
  }
  
const formCalculateIBM = document.getElementById('form');
  
formCalculateIBM.addEventListener('submit', (event) => {
    event.preventDefault();
    // Converting values ​​to float
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (validateInput(weight, height)) {
        const bmi = calculateIBM(weight, height);
        document.getElementById('bmi').value = parseFloat(bmi).toFixed(2);
        checkBMI(bmi);
    } else {
        document.getElementById('bmi').value = "## ERRO ##";
    }
  });

// Checking the values
const checkBMI = (bmi) => {
    if (bmi < 18.5) {
      createMessage("Underweight", "alert")
    } else if (bmi >= 18.5 && bmi <= 24.9){
      createMessage("Normal weight", "sucess")
    } else if (bmi >= 25 && bmi <= 29.9){
      createMessage("Overweight", "warning")
    } else if (bmi >= 30 && bmi <= 34.9){
      createMessage("Obese", "warning")
    } else if (bmi >= 35 && bmi <= 39.9){
      createMessage("Severely Obese", "alert")
    } else {
      createMessage("Morbidly Obese", "danger")
    }
  }
  
// Creating a message
const createMessage = (msg, type) => {
    document
      .querySelector("body")
      .insertAdjacentHTML("beforebegin", `<div class='message ${type}'>${msg}</div>`);
  
    setTimeout(() => {
      deleteMessage();
    }, 3000);
  }
  
//Deleting a message
const deleteMessage = () => {
    const list = document.querySelectorAll(".message");
    for (const item of list) {
      item.remove();
    }
  }