const birthday = document.querySelector("#birthday");
const submitButton = document.querySelector("#submitInput");
const infoText = document.querySelector("p");
const today = new Date();


submitButton.addEventListener("click", function (e){
    e.preventDefault();
    if (birthday.value === ""){
        infoText.innerText = "Don't leave it empty~";
    }
    else{
        const birthdayArray = birthday.value.split("-");
        for (let number in birthdayArray){
            birthdayArray[number] = Number(birthdayArray[number]);
        }
        let age = today.getFullYear() - birthdayArray[0];
        if (birthdayArray[1] > today.getMonth() + 1){
            age -= 1;
        }
        else if (birthdayArray[1] === today.getMonth() + 1 && birthdayArray[2] > today.getDate()){
            age -= 1
        }
        infoText.innerText = "Your birthday is " + birthday.value + "\nYou are " + age + " year old";
    }
})