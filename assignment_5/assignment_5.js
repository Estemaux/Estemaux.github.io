function convert_temperature() {
    let x = document.getElementById('temperature').value;
    let ans = (x * 1.8) + 32;
    document.getElementById('asnwer').innerHTML = `${x}ºC is ${ans.toFixed(1)}ºF`;
    document.getElementById('second').innerHTML = `${ans.toFixed(1)}ºF is ${((ans - 32) * 5/9).toFixed(1)}ºC`;
}

function bmi_calculation(){
    let John_BMI =(document.getElementById('John_Mass').value
    /document.getElementById('John_Height').value ** 2) * 703;

    let Lucas_BMI = (document.getElementById('Lucas_Mass').value
    /document.getElementById('Lucas_Height').value ** 2) * 703;

    if(Lucas_BMI > John_BMI){
        console.log("Lucas' BMI is higher than John's");
    }
    else {
        console.log("John's BMI is higher than Lucas'");
    }
    document.getElementById('Winner').innerHTML = `John's BMI ${John_BMI.toFixed(1)} is higher than Lucas' BMI ${Lucas_BMI.toFixed(1)}, that is statment ${John_BMI > Lucas_BMI}!`;
}

let num = pro,pt("Enter a number:");

if (num == null || isNaN(Number(num))){
    console.log("Please enter a valid digit number");
}
else if (num == 10){
    console.log("Congrats! You won 10 points");
}
else if (num == 8){
    console.log("Congrats! You won 8 points");
}
else if (num != 10 || num != 8){
    console.log("NOT MATCHED!");
}